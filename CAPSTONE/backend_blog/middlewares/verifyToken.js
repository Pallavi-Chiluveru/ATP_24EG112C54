import jwt from "jsonwebtoken"
import { config } from "dotenv"
import { UserModel } from "../models/userModel.js"
const { verify } = jwt
config()

//it is a function which returns middleware
export const verifyToken = (...allowedRoles) => {//verifyToken ("AUTHOR","USER","ADMIN")
    return async (req, res, next) => {
        try {
            //get token from cookie
            const token = req.cookies?.token //req.cookies is an object and token is variable we exactly used in commonAPI 
            //check if token exists
            if (!token) {
                return res.status(401).json({ message: "please login first" })
            }
            //validate token (decoding)
            let decodedToken = verify(token, process.env.SECRET_KEY) //vrify token throws error if invalid ,if valid it returns decoded token
            //check role same as in decoded token 
            if (!allowedRoles.map(r => r.toUpperCase()).includes(decodedToken.role.toUpperCase())) {
                return res.status(403).json({ message: "You're not authorized" })
            }
            
            // Check if user is still active in the database
            const userInDb = await UserModel.findById(decodedToken.id);
            if (!userInDb) {
                return res.status(401).json({ message: "User no longer exists" });
            }
            if (userInDb.isUserActive === false) {
                return res.status(403).json({ message: "Your account has been blocked by the admin." });
            }

            ///add decoded token to req
            req.user = decodedToken
            next()
        } catch (err) {
            return res.status(401).json({ message: "Invalid token" })
        }
    }
}

