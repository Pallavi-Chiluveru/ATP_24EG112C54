# Week 03: MongoDB & Database Integration

This week focuses on database management using MongoDB and integrating it with Node.js applications using the Mongoose ODM (Object Data Modeling) library.

## Directory Structure

```text
Week_03/
├── Backend_product/         # Node.js + Mongoose Integration
│   ├── productAPI.js        # API Routes for Product CRUD
│   ├── productModel.js      # Mongoose Schema & Model Definition
│   ├── server.js            # Express Server with MongoDB Connection
│   └── req.http             # REST Client tests
├── MongodbQues1.txt         # Raw MongoDB Shell Commands
└── README.md
```

## Folder Details

### 1. Backend_product
A full-stack backend module that connects a Node.js server to a MongoDB database.

- **`productModel.js`**: Defines the `Product` schema using Mongoose. It includes validation rules such as:
    - `productId`, `productName`, and `brand` are required.
    - `price` must be between 10,000 and 50,000.
- **`productAPI.js`**: Implements the business logic and API endpoints to interact with the MongoDB collection.
- **`server.js`**: Configures the Express application and establishes the connection string to the MongoDB instance.
- **`req.http`**: Contains sample requests to test `GET`, `POST`, `PUT`, and `DELETE` operations on the products.

### 2. MongodbQues1.txt
A reference guide for performing administrative and data manipulation tasks directly in the MongoDB Shell (`mongosh`).

- **Collection Management**: Creating the `employees` collection.
- **CRUD Operations**:
    - Inserting complex documents with nested arrays (skills) and objects (experiences).
    - Finding documents based on specific array elements (e.g., "React" skill).
    - Updating documents using `$push` for arrays and `$set` for nested object properties.
    - Deleting or unsetting specific fields.

## How to Run

### Testing MongoDB Commands
You can copy the commands from `MongodbQues1.txt` and run them in your MongoDB Shell or MongoDB Compass.

### Running the Backend
1. Ensure MongoDB is running on your system.
2. Navigate to the backend directory:
   ```bash
   cd Backend_product
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node server.js
   ```
5. Use the `req.http` file (with a REST client extension) or Postman to test the API endpoints.
