import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import bcryptjs from 'bcryptjs';

// Assuming running from backend_blog
dotenv.config({ path: path.resolve('./.env') });

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    role: String
}, { strict: false });

const User = mongoose.model('User', UserSchema, 'users');

async function resetAdmin() {
    try {
        await mongoose.connect(process.env.DB_URL);
        const adminUser = await User.findOne({ role: 'ADMIN' });
        if (adminUser) {
            const newPassword = 'admin'; // simple password
            const hashedPassword = await bcryptjs.hash(newPassword, 10);
            adminUser.password = hashedPassword;
            await adminUser.save();
            console.log("Admin Email:", adminUser.email);
            console.log("Password reset to:", newPassword);
        } else {
            console.log("No admin found in the database.");
        }
    } catch(err) {
        console.error(err);
    } finally {
        mongoose.disconnect();
    }
}
resetAdmin();
