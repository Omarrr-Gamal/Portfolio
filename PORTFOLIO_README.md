# Modern Portfolio Web Application

A stunning, fully dynamic personal portfolio with hidden admin dashboard and authentication system.

## 🎯 Features

### Public Portfolio
- **Hero Section**: Animated hero with gradient profile image and floating effects
- **Auto-scrolling Skills Strip**: Infinite scroll of technology icons
- **Featured Projects**: Showcase your best work with hover effects
- **Projects Page**: Grid layout with project details and modal popups
- **About Page**: Personal story and highlights
- **Contact Page**: Contact form with animation
- **Dark Mode**: Toggle between light and dark themes with persistence

### Admin Dashboard (Hidden)
Access the admin panel at `/admin/login`

**Admin Features:**
- 🎨 **Dashboard**: Overview of projects, skills, and stats
- 📂 **Projects Management**: Full CRUD operations for projects
- 👤 **Hero Section Editor**: Update name, greeting, description, and profile image
- 🛠️ **Skills Manager**: Add/remove skills with emoji icons
- 🎨 **Theme Customizer**: Change primary, secondary, and background colors with live preview
- 📝 **About Editor**: Update about section content

### Technologies Used
- React (JavaScript)
- Tailwind CSS v4
- Motion (Framer Motion) for animations
- React Router for navigation
- Axios for API integration (ready for backend)
- Context API for state management

## 🎨 Design System
- Modern, minimal, and futuristic aesthetic
- Gradient colors: Indigo/Purple/Cyan/Blue tones
- Soft shadows and rounded corners
- Smooth animations throughout
- Fully responsive design

## 🚀 Getting Started

The application is fully functional with mock data. All admin changes are persisted in localStorage.

### Admin Access
Navigate to `/admin/login` 

### Public Portfolio
Visit the root `/` to see the public portfolio.

## 🔒 Security Note

This is a frontend application. For production use:
- Implement proper backend authentication
- Use secure token storage
- Add input validation and sanitization
- Implement rate limiting
- Use environment variables for API URLs

## 🎯 Features Highlights

✅ Smooth page transitions
✅ Hover effects and micro-interactions
✅ Auto-scrolling skills strip
✅ Project modals with details
✅ Dark mode with localStorage persistence
✅ Fully responsive design
✅ Admin dashboard with full CRUD operations
✅ Theme customization with live preview
✅ Protected admin routes
✅ Form validation
✅ Image upload ready (URL-based currently)
