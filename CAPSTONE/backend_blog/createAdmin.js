import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import bcryptjs from 'bcryptjs';

dotenv.config({ path: path.resolve('./.env') });

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    role: String,
    isUserActive: Boolean
}, { strict: false });

const User = mongoose.model('User', UserSchema, 'users');

async function createAdmin() {
    try {
        await mongoose.connect(process.env.DB_URL);
        
        const existingAdmin = await User.findOne({ email: 'admin@gmail.com' });
        if (existingAdmin) {
            console.log("Admin already exists!");
            return;
        }

        const hashedPassword = await bcryptjs.hash('admin123', 10);
        
        const newAdmin = new User({
            firstName: 'System',
            lastName: 'Admin',
            email: 'admin@gmail.com',
            password: hashedPassword,
            role: 'ADMIN',
            isUserActive: true
        });

        await newAdmin.save();
        console.log("Admin created successfully!");
    } catch(err) {
        console.error("Error creating admin:", err);
    } finally {
        mongoose.disconnect();
    }
}

createAdmin();
