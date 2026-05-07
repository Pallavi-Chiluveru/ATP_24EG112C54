# MERN Blogging Platform - Capstone Project

A comprehensive, role-based blogging platform built using the MERN stack (MongoDB, Express, React, Node.js). This project features a full-featured backend with authentication, article management, and a dynamic frontend built with React and Tailwind CSS.

## 🚀 Features

- **Role-Based Access Control (RBAC):**
  - **USER:** Can read articles, comment on them, and manage their profile.
  - **AUTHOR:** Can write, edit, and manage their own articles.
  - **ADMIN:** Can manage users and articles (soft delete/block).
- **Authentication & Authorization:**
  - Secure login and registration using JWT (JSON Web Tokens).
  - Password hashing with BcryptJS.
  - Cookie-based authentication for enhanced security.
- **Article Management:**
  - Authors can create articles with titles, categories, and content.
  - View articles by ID or browse all active articles.
- **Interactive Comment System:**
  - Authenticated users can leave comments on articles.
- **Media Uploads:**
  - Integrated with **Cloudinary** for professional profile image hosting.
  - Handled via Multer and Cloudinary storage.
- **Responsive UI:**
  - Modern, clean design built with **Tailwind CSS v4**.
  - Interactive state management using **Zustand**.
  - Smooth notifications with **React Hot Toast**.

## 🛠️ Tech Stack

### Frontend
- **React 19** (Vite)
- **Tailwind CSS v4**
- **Zustand** (State Management)
- **React Router 7** (Navigation)
- **Axios** (API Requests)
- **React Hook Form** (Form Handling)
- **Lucide React** (Icons)

### Backend
- **Node.js & Express**
- **MongoDB & Mongoose** (Database)
- **JWT** (Authentication)
- **Cloudinary** (Media Storage)
- **Multer** (File Uploads)
- **BcryptJS** (Password Security)

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB Atlas account or local MongoDB instance
- Cloudinary account for media storage

### 1. Clone the repository
```bash
git clone <repository-url>
cd CAPSTONE
```

### 2. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend_blog
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend_blog` directory and add the following:
   ```env
   PORT=4000
   DB_URL=your_mongodb_connection_string
   SECRET_KEY=your_jwt_secret_key
   CLOUDINARY_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   FRONTEND_URL=http://localhost:5173
   ```
4. Start the backend server:
   ```bash
   npm start # or node server.js
   ```

### 3. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend_blog
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend_blog` directory:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```

---

## 📁 Project Structure

```text
CAPSTONE/
├── backend_blog/           # Node.js Express Backend
│   ├── APIs/               # Route Handlers (Admin, Author, User, Common)
│   ├── config/             # Configuration (DB, Cloudinary, Multer)
│   ├── middlewares/        # Custom Middlewares (Auth verification)
│   ├── models/             # Mongoose Schemas (User, Article)
│   └── server.js           # Entry point
├── frontend_blog/          # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI Components & Pages
│   │   ├── store/          # Zustand State Stores
│   │   ├── styles/         # Common Tailwind Styles
│   │   └── App.jsx         # Routing and Main Logic
│   └── index.html          # HTML Entry
└── README.md               # Project Documentation
```

## 📝 Usage
- **Registration:** Users can register as either a "USER" or an "AUTHOR".
- **Authors:** Log in and navigate to the "Author Profile" to write new articles.
- **Users:** Browse the "Articles" section and click on any article to read and leave comments.
- **Admin:** Use the "Admin Profile" to manage the platform's content and users.

---

## 📜 License
This project is for educational purposes as part of the SUNTEK-JavaScript ATP program.
