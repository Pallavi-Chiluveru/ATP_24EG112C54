import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Assuming running from backend_blog
dotenv.config({ path: path.resolve('./.env') });

async function dropDatabase() {
    try {
        console.log("Connecting to database...");
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected successfully. Dropping all collections...");

        const collections = await mongoose.connection.db.collections();
        for (let collection of collections) {
            console.log(`Dropping collection: ${collection.collectionName}`);
            await collection.drop();
        }

        console.log("Database cleared successfully!");
    } catch(err) {
        console.error("Error dropping database:", err);
    } finally {
        mongoose.disconnect();
    }
}
dropDatabase();
