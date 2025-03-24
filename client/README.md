# Qaiser's Blog - Frontend

<div align="center">
  <!-- <img src="./public/logo.png" alt="Blog Logo" width="200"/> -->
  <p>React-based frontend for the MERN stack blog platform</p>
</div>

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack
- Framework: React 18 with Vite
- State Management: Redux Toolkit
- Styling:
  - Tailwind CSS
  - Flowbite React Components
- Rich Text Editor: React Quill
- Authentication: Firebase
- Image Upload: Cloudinary
- Other Tools:
  - React Router v6
  - Moment.js
  - React Icons
  - React Circular Progressbar

## 📁 Project Structure
```plaintext
src/
├── components/        # Reusable components
├── pages/            # Page components
├── redux/            # Redux store and slices
├── firebase/         # Firebase configuration
├── utils/            # Utility functions
└── App.jsx           # Main application component
```

## 🔑 Environment Variables
Create a .env file in the client directory:

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

## 📱 Features
### User Interface
- Responsive design for all devices
- Dark/Light theme support
- Modern and clean UI
- Loading states and animations
### Authentication
- Email/Password login
- Google OAuth integration
- Protected routes
- User profile management
### Blog Features
- Rich text editor with image support
- Comment system
- Like/Unlike functionality
- Post categories
- Search functionality
### Admin Dashboard
- User management interface
- Post management
- Analytics overview
- Comment moderation
## 🔨 Development
```bash
# Run development server
npm run dev

# Lint code
npm run lint

# Format code
npm run format

# Build for production
npm run build
```

## 📚 Available Scripts
- npm run dev - Start development server
- npm run build - Build for production
- npm run lint - Run ESLint
- npm run preview - Preview production build
## 🧪 Testing
```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
 ```

## 📦 Dependencies
### Main Dependencies
- react
- react-dom
- react-router-dom
- @reduxjs/toolkit
- react-redux
- tailwindcss
- flowbite-react
- firebase
- react-quill
- moment
### Development Dependencies
- vite
- @vitejs/plugin-react-swc
- eslint
- prettier
- tailwindcss
- postcss
- autoprefixer
## 🤝 Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
## 📝 Notes
- The development server runs on port 5173 by default
- API requests are proxied to the backend server (configured in vite.config.js)
- Make sure to have the backend server running for full functionality
## 📞 Support
For support, email qaiserejaz125@gmail.com

## 📄 License
This project is licensed under the MIT License.