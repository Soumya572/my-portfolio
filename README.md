# Interactive Portfolio Website

A modern, interactive portfolio website built with React, Tailwind CSS, and Framer Motion animations. Features a responsive design, smooth animations, and an interactive contact form.

## Features ✨

- **Responsive Design**: Mobile-first approach with smooth responsiveness across all devices
- **Smooth Animations**: Built-in animations using Framer Motion for engaging interactions
- **Interactive Navigation**: Fixed header with smooth scrolling and mobile menu
- **Project Showcase**: Hover effects and interactive project cards
- **Contact Form**: Fully validated contact form with error handling and success feedback
- **Dynamic Skills Grid**: Interactive skills display with hover effects
- **Social Links**: Quick access to social media profiles
- **Scroll Indicator**: Animated scroll indicator in hero section

## Technologies Used 🛠️

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **PostCSS & Autoprefixer**: CSS processing

## Getting Started 🚀

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

## Project Structure 📁

```
portfolio/
├── src/
│   ├── components/
│   │   └── ContactForm.jsx      # Interactive contact form
│   ├── App.jsx                  # Main portfolio component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles + Tailwind
├── index.html                   # HTML entry point
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies
```

## Available Scripts 📜

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Interactive Features 🎨

### Navigation
- Smooth scroll behavior throughout the page
- Fixed header that changes appearance on scroll
- Mobile-responsive menu with toggle button
- Animated navigation links

### Projects Section
- Hover effects with lift animation
- Interactive project cards
- Tag badges with hover effects
- Click to view project details

### Contact Form
- Real-time form validation
- Visual error messages
- Success/error feedback
- Loading state indication
- Smooth animations

### Skills Grid
- Interactive skill badges
- Hover scale effects
- Responsive grid layout

## Customization 🎯

### Update Your Information

1. **Navigation & Hero**:
   - Change `YourName.dev` to your name
   - Update hero section copy in `src/App.jsx`

2. **Projects**:
   - Edit project details in the `projects` array in `src/App.jsx`
   - Update project links and descriptions

3. **About Section**:
   - Update the about text
   - Modify the skills list as needed

4. **Contact**:
   - Update email link in social section
   - Customize form validation as needed
   - Add backend integration for form submission

5. **Colors & Styling**:
   - Modify Tailwind colors in `tailwind.config.js`
   - Update animation keyframes as desired

## Deployment 🚀

Build for production:
```bash
npm run build
```

The `dist` folder is ready to be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Performance Tips ⚡

- Images are optimized with Lucide React icons
- CSS is minified with Tailwind
- JavaScript is bundled with Vite for optimal performance
- Smooth scroll behavior is hardware-accelerated

## License 📝

This project is open source and available under the MIT License.

## Support 💬

For questions or issues, feel free to reach out through the contact form on the portfolio!

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
