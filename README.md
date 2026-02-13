# Basavaraj Malappa Gudasalamani - Portfolio Website

A modern, animated portfolio website built with React, Vite, Tailwind CSS, and Framer Motion, showcasing my projects, skills, and experience as a Full Stack Developer.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Modern Design**: Dark theme with gradient accents and glassmorphism effects
- **Smooth Animations**: Page transitions and scroll-triggered animations using Framer Motion
- **Responsive Layout**: Mobile-first design that works seamlessly on all devices
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Project Showcase**: Grid layout featuring all major projects with tech stacks
- **Skills Display**: Organized by categories with icons for easy visualization
- **Contact Section**: Multiple ways to get in touch with social media links
- **Performance Optimized**: Fast loading times with optimized bundle size
- **SEO Friendly**: Proper meta tags and semantic HTML for better search engine visibility
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Icons** - Popular icon library

### Styling
- **Custom Animations** - Fade-in, slide-up, and stagger effects
- **Gradient Text** - Eye-catching gradient effects on headings
- **Glassmorphism** - Modern glass effect for cards and navigation
- **Responsive Grid** - Mobile, tablet, and desktop layouts

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Basavarajrp/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Build & Deployment

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

### Deployment Options

#### 1. **Vercel** (Recommended)
Vercel offers the easiest deployment for Vite projects with zero configuration.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or use the Vercel Dashboard:
1. Import your Git repository
2. Vercel auto-detects Vite configuration
3. Deploy with one click

**Live URL**: `https://your-portfolio.vercel.app`

#### 2. **Netlify**
Deploy using Netlify's drag-and-drop or CLI.

**Using Netlify CLI:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

**Using Netlify Dashboard:**
1. Drag and drop the `dist` folder to Netlify
2. Or connect your Git repository for continuous deployment

**Build settings:**
- Build command: `npm run build`
- Publish directory: `dist`

#### 3. **GitHub Pages**
Deploy to GitHub Pages using the `gh-pages` package.

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script to package.json
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

Update `vite.config.js` for GitHub Pages:
```javascript
export default {
  base: '/portfolio/', // Replace with your repo name
  // ... other config
}
```

## 📝 Customization

### Update Portfolio Content

All portfolio content is centralized in `src/data/portfolio.js`. Update this file to modify:

- **Personal Information**: Name, title, bio, contact details
- **Education**: Degree, institution, CGPA
- **Internships**: Company, role, period, description
- **Skills**: Add/remove skills by category
- **Projects**: Add/remove projects with descriptions and tech stacks
- **Social Links**: GitHub, LinkedIn, Email

### Example: Adding a New Project

```javascript
// src/data/portfolio.js
export const projects = [
  // ... existing projects
  {
    id: 8,
    title: "Your New Project",
    description: "Project description here",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/project",
    featured: true
  }
];
```

### Customize Colors

Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      },
    },
  },
}
```

### Modify Animations

Animation variants are defined in `src/utils/animations.js`. Customize duration, easing, and effects:

```javascript
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 } // Adjust duration
  }
};
```

## 📂 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    # Navigation bar with smooth scroll
│   │   ├── Hero.jsx           # Hero section with animations
│   │   ├── About.jsx          # About section with stats
│   │   ├── Skills.jsx         # Skills organized by category
│   │   ├── Projects.jsx       # Project cards grid
│   │   └── Contact.jsx        # Contact section with footer
│   ├── data/
│   │   └── portfolio.js       # Centralized portfolio data
│   ├── utils/
│   │   └── animations.js      # Framer Motion animation variants
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # App entry point
│   └── index.css              # Global styles + Tailwind
├── index.html                 # HTML template with meta tags
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and scripts
└── README.md                  # This file
```

## 🎨 Design Philosophy

- **Dark Theme**: Reduces eye strain and looks modern
- **Gradient Accents**: Adds visual interest without overwhelming
- **Smooth Animations**: Enhances user experience without being distracting
- **Clean Typography**: Easy to read with proper hierarchy
- **Whitespace**: Gives content room to breathe
- **Mobile-First**: Ensures great experience on all devices

## 🧪 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Basavaraj Malappa Gudasalamani**

- GitHub: [@Basavarajrp](https://github.com/Basavarajrp)
- LinkedIn: [Basavaraj Gudasalamani](https://www.linkedin.com/in/basavaraj-gudasalamani-97b7a3204)
- Email: basavarajgudasalamani@gmail.com

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## 📞 Support

If you have any questions or need help with customization, feel free to reach out:

- Open an issue on GitHub
- Email: basavarajgudasalamani@gmail.com

---

⭐ **Star this repository if you find it helpful!**

Built with ❤️ using React and Tailwind CSS
