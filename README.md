# 📝 Blogs By Qaiser

<div align="center">
  <img src="client/public/logo.png" alt="Blog Logo" width="200"/>
  <p>A modern, feature-rich blogging platform built with the MERN stack</p>
</div>

<div align="center">

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

## ✨ Features

### User Management
- 🔐 Secure authentication system with email/password and Google OAuth
- 👤 Customizable user profiles with avatar upload
- 🔒 Role-based authorization (Admin/User)

### Blog Features
- ✍️ Rich text editor with image support
- 📱 Fully responsive design for all devices
- 🌓 Dark/Light theme switching
- 💬 Interactive comment system
- 👍 Like/Unlike functionality
- 🏷️ Category-based post organization
- 🔍 Advanced search functionality

### Admin Features
- 📊 Comprehensive dashboard
- 👥 User management
- 📝 Post moderation
- 💼 Content management

## 🖥️ Screenshots

<div align="center">
  <img src="screenshots/home.png" alt="Home Page" width="400"/>
  <img src="screenshots/dashboard.png" alt="Dashboard" width="400"/>
  <p><em>Home page and Admin Dashboard</em></p>
</div>

<div align="center">
  <img src="screenshots/editor.png" alt="Post Editor" width="400"/>
  <img src="screenshots/profile.png" alt="User Profile" width="400"/>
  <p><em>Post Editor and User Profile</em></p>
</div>

## 🛠️ Technical Stack

### Frontend
- **React 18** with Vite for blazing-fast development
- **Redux Toolkit** for state management
- **Tailwind CSS** with Flowbite components
- **React Quill** for rich text editing
- **React Router 6** for navigation
- **Firebase** for Google authentication

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Bcrypt** for password hashing
- **Cloudinary** for image storage

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB
- Cloudinary account
- Firebase account (for additional authentication)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/QaiserEjaz/blogs-by-qaiser.git
cd mern-blog
 ```
2. Install dependencies for both backend and frontend:
```bash
npm install
cd client
npm install
 ```

3. Create .env file in the root directory:
```env
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
NODE_ENV=development
```

4. Create .env file in the client directory:
```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_preset_name
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
 ```

### Running the Application
1. Start the backend server:
```bash
npm run dev
```

2. Start the frontend development server:
```bash
cd client
npm run dev
 ```

The application will be available at http://localhost:5173

## 📚 API Endpoints
- Authentication:
  
  - POST /api/auth/signup - Register new user
  - POST /api/auth/signin - Login user
  - POST /api/auth/google - Google authentication

- Posts:
  
  - GET /api/post/getposts - Get all posts
  - POST /api/post/create - Create new post
  - PUT /api/post/updatepost/:postId - Update post
  - DELETE /api/post/deletepost/:postId - Delete post

- Comments:
  
  - POST /api/comment/create - Create comment
  - GET /api/comment/getPostComments/:postId - Get post comments
  - PUT /api/comment/likeComment/:commentId - Like/unlike comment

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch ( git checkout -b feature/AmazingFeature )
3. Commit your changes ( git commit -m 'Add some AmazingFeature' )
4. Push to the branch ( git push origin feature/AmazingFeature )
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments
- React Documentation
- MongoDB Documentation
- Tailwind CSS
- Flowbite React

## 📞 Contact
Qaiser - @twitter_handle

Project Link: https://github.com/QaiserEjaz/blogs-by-qaiser