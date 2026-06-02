 🖋️ InkFlow

### Write. Publish. Engage.

InkFlow is a modern role-based blogging platform built using the MERN stack that enables users to create, publish, and interact with content in a secure and collaborative environment. The platform is designed around three distinct roles—Admin, Author, and User—ensuring a structured content management workflow while maintaining a seamless experience for readers and content creators.

The application combines secure authentication, role-based authorization, cloud-based image storage, and a responsive user interface to deliver a complete blogging solution suitable for modern web applications.

---

# 🚀 Features

InkFlow provides a complete article publishing ecosystem where authors can create and manage content, users can engage with articles through comments, and administrators can oversee platform activities.

Authors are able to create, edit, publish, and remove their own articles while uploading images to enhance their content. Users can browse published articles, read content from different authors, and participate in discussions by posting comments. Administrators have additional privileges that allow them to monitor platform activities, manage users, and ensure smooth operation of the system.

The platform also includes secure JWT-based authentication, protected routes, cloud image storage, and responsive design to provide a consistent experience across devices.

---

# 👥 User Roles

## 🛡️ Admin

The Admin is responsible for overseeing the platform and maintaining system integrity. Administrators can monitor user activities, manage platform users, and ensure content quality standards are maintained across the application.

## ✍️ Author

Authors serve as content creators within the platform. They can write new articles, update existing content, upload article images, manage their published posts, and interact with readers through comments. Authors have permission to modify or remove only the articles they own.

## 👤 User

Users are the primary consumers of content. They can browse articles, read published posts, explore content from different authors, and participate in discussions through the commenting system.

---

# 🏗️ System Architecture

InkFlow follows a modern client-server architecture based on the MERN technology stack.

The frontend application is developed using React.js and communicates with the backend through RESTful APIs. User requests are processed by an Express.js server running on Node.js, which handles authentication, authorization, article management, comment processing, and business logic.

MongoDB serves as the primary database for storing user information, articles, comments, and application data. Cloudinary is integrated for cloud-based image storage, allowing authors to upload and manage media assets efficiently.

```text
Frontend (React + Redux)
           │
           ▼
Backend (Node.js + Express)
           │
    ┌──────┴──────┐
    ▼             ▼
MongoDB      Cloudinary
(Database)   (Images)
```

This architecture ensures scalability, maintainability, and secure communication between different application layers.

---

# 🔐 Authentication & Authorization

InkFlow implements JWT (JSON Web Token) authentication to secure user sessions and protect sensitive resources.

When a user registers, their information is validated and stored securely in MongoDB. During login, the server generates a JWT token containing user-specific information and role details. This token is attached to subsequent requests and validated through middleware before protected resources can be accessed.

Role-Based Access Control (RBAC) ensures that users can only access resources appropriate to their permissions. For example, authors can manage only their own articles, while administrators have elevated access for platform management.

---

# 📂 Project Structure

The project is divided into separate frontend and backend modules to maintain a clean and scalable codebase.

```bash
InkFlow/
│
├── frontend_blog/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── services/
│   └── routes/
│
├── backend_blog/
│   ├── APIs/
│   │   ├── adminAPI.js
│   │   ├── authorAPI.js
│   │   ├── userAPI.js
│   │   └── commonAPI.js
│   │
│   ├── models/
│   │   ├── articleModel.js
│   │   └── userModel.js
│   │
│   ├── middlewares/
│   │   ├── verifyToken.js
│   │   └── cloudinaryConfig.js
│   │
│   ├── config/
│   └── server.js
│
└── README.md
```

The frontend module handles user interactions, state management, routing, and presentation logic, while the backend module manages APIs, database operations, authentication, and business rules.

---

# 🛠️ Technology Stack

## Frontend

The frontend is built using React.js and Vite, providing a fast and responsive user experience. Redux Toolkit is used for state management, while React Router handles navigation throughout the application.

### Technologies Used

* React.js
* Vite
* Redux Toolkit
* React Router DOM
* Axios
* Bootstrap / CSS

---

## Backend

The backend is developed using Node.js and Express.js, offering a scalable RESTful API architecture. MongoDB is used for persistent data storage, while JWT ensures secure authentication and authorization.

### Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* dotenv

---

## Cloud Services

Cloudinary is integrated to manage image uploads and media storage, ensuring reliable and optimized image delivery.

---

# 💾 State Management

InkFlow utilizes Redux Toolkit to maintain a centralized application state.

Authentication information such as login status, user profile details, role information, and access tokens are stored in Redux and synchronized with local storage to provide persistent user sessions across browser refreshes.

---

# 📡 API Overview

The backend exposes RESTful APIs that handle authentication, article management, comments, and administrative operations.

The Common API manages user registration and login processes. User APIs allow users to view articles and interact through comments. Author APIs handle article creation, updates, and deletion. Administrative APIs provide monitoring and management capabilities for platform administrators.

---

# 📸 Image Upload Workflow

When an author uploads an image, the file is first processed by the backend middleware and then uploaded to Cloudinary. Cloudinary returns a secure URL that is stored in MongoDB along with the article information. Whenever the article is displayed, the image is fetched directly from Cloudinary, ensuring efficient delivery and optimized performance.

---

# ⚙️ Installation & Setup

## Clone the Repository

```bash
git clone https://github.com/yourusername/role-based-blog-platform.git
```

## Backend Setup

```bash
cd backend_blog
npm install
npm start
```

## Frontend Setup

```bash
cd frontend_blog
npm install
npm run dev
```

Create a `.env` file and configure the required environment variables for MongoDB, JWT, and Cloudinary before starting the application.

---

# 🌟 Future Enhancements

Several features can be added in future versions to further enhance the platform.

Potential improvements include article likes and reactions, bookmark functionality, advanced search and filtering, article analytics, notification systems, rich text editors, category-based recommendations, and real-time interactions using WebSockets.

---

# 👨‍💻 Author

Developed by **Girish** as a Full-Stack MERN application to demonstrate modern web development concepts including Authentication, Authorization, RESTful APIs, MongoDB Database Design, Redux State Management, Cloud Integration, and Role-Based Access Control.

If you found this project useful, consider giving it a ⭐ on GitHub.
