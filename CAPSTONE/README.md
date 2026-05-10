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

## 📖 About the Project

**BlogApp** is a modern, high-performance blogging ecosystem designed for the next generation of digital creators. It goes beyond a simple CRUD application, offering a sophisticated **Role-Based Access Control (RBAC)** system that caters to three distinct user personas: **Readers, Authors, and Administrators**.

The platform is engineered for visual excellence, featuring a **premium design language** inspired by clean, minimalist aesthetics combined with vibrant, dynamic elements. Every interaction—from writing a new post in our rich editor to discovering stories through our animated hero sections—is optimized for a seamless user experience.

### Why BlogApp?
- **Premium UI/UX:** Stunning visuals, glassmorphism effects, and smooth animations powered by Tailwind CSS v4.
- **Security First:** Robust authentication with JWT and secure cookie handling, alongside password encryption.
- **Scalable Architecture:** A decoupled MERN architecture that ensures the backend and frontend can scale independently.
- **Media Rich:** Seamless integration with Cloudinary for lightning-fast image delivery and management.

---

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB** (Local instance or Atlas)
- **Cloudinary Account** (for image uploads)

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
