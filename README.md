# 🚀 Hruthvik Naik - Portfolio Website

A modern, responsive portfolio website built with React.js, Tailwind CSS, and Framer Motion. Showcasing the work and skills of Hruthvik Naik, Data Engineer Intern at Target.

![Portfolio Preview](https://img.shields.io/badge/Status-Complete-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3.x-blueviolet)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.x-pink)

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional layout with smooth animations
- Responsive design that works on all devices
- Modern gradients and glassmorphism effects
- Custom color scheme with primary and accent colors

### 🚀 **Smooth Animations**
- Framer Motion powered animations throughout
- Scroll-triggered animations using Intersection Observer
- Hover effects and micro-interactions
- Typewriter effect for dynamic text
- Smooth page transitions

### 📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for desktop, tablet, and mobile
- Adaptive navigation with mobile hamburger menu
- Responsive grid layouts and typography

### 🔧 **Interactive Elements**
- Animated skill progress bars with shimmer effects
- Hover cards with 3D transformations
- Interactive contact form with validation
- Social media links with hover animations
- Scroll-to-top button with smooth scrolling

## 🏗️ **Sections Overview**

### 1. **Navigation Bar**
- Fixed navigation with blur backdrop
- Active section highlighting while scrolling
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- "Hire Me" CTA button

### 2. **Hero Section**
- Animated gradient background
- Typewriter effect for roles
- Professional introduction
- Call-to-action buttons
- Floating particle animations

### 3. **About Section**
- Professional bio with achievements
- Key accomplishments highlighted:
  - Data Engineer Intern at Target
  - 44th rank globally in ICPC Hackathon
  - Top 327th in Flipkart Grid 6.0
- Download resume functionality
- Achievement cards with hover effects

### 4. **Skills Section**
- Organized skill categories:
  - Programming Languages
  - Data & Backend
  - Frontend Development
  - Databases
  - Tools & Technologies
- Animated progress bars
- Interactive category tabs
- Shimmer effects on skill bars

### 5. **Projects Section**
- Featured project showcase:
  - **TrustCampus** - Community-based college platform
  - **AI SaaS Podcast Platform** - AI-powered content platform
  - **E-Commerce Scalable Server** - High-performance backend
  - **Data Pipeline Analytics** - Real-time data processing
- Live demo and GitHub links
- Technology stack tags
- Hover animations and overlays

### 6. **Contact Section**
- Contact information with icons
- Functional contact form
- Social media links
- Interactive form validation
- Loading states and success messages

### 7. **Footer**
- Professional footer with social links
- Copyright information
- Scroll to top functionality
- Animated heart icon

## 🛠️ **Tech Stack**

### **Frontend**
- **React.js 18** - Modern React with hooks
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Icons** - Popular icon library
- **React Intersection Observer** - Scroll animations

### **Styling**
- **Custom Tailwind Configuration** - Extended colors and animations
- **CSS Custom Properties** - Dynamic theming
- **Responsive Design** - Mobile-first approach
- **Modern CSS Features** - Backdrop filters, gradients, transforms

### **Development Tools**
- **Create React App** - Zero-configuration setup
- **PostCSS & Autoprefixer** - CSS processing
- **React Router** - Client-side routing (if needed)

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 16+ installed
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/hruthviknaik/portfolio
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📁 **Project Structure**

```
src/
├── components/
│   ├── Navbar.js              # Navigation component
│   ├── Hero.js                # Hero section with intro
│   ├── About.js               # About section with achievements
│   ├── Skills.js              # Skills showcase with progress bars
│   ├── Projects.js            # Featured projects
│   ├── Contact.js             # Contact form and info
│   ├── Footer.js              # Footer with social links
│   ├── ScrollToTop.js         # Scroll to top button
│   └── TypewriterEffect.js    # Custom typewriter component
├── App.js                     # Main app component
├── index.css                  # Tailwind imports and custom styles
└── index.js                   # App entry point
```

## 🎨 **Customization**

### **Colors**
The portfolio uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Blue shades (#3b82f6)
- **Secondary**: Gray shades for backgrounds
- **Accent**: Purple/Pink for highlights

### **Content**
Update the following files to customize content:
- **Personal Info**: Update name, bio, and contact details in respective components
- **Projects**: Modify project data in `Projects.js`
- **Skills**: Update skills and categories in `Skills.js`
- **Social Links**: Update social media links in `Contact.js` and `Footer.js`

### **Styling**
- Modify `tailwind.config.js` for theme customization
- Update animations in `index.css`
- Adjust component-specific styles in individual components

## 📱 **Responsive Breakpoints**

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌟 **Performance Features**

- **Lazy Loading**: Components load as they come into view
- **Optimized Images**: Placeholder system for project images
- **Efficient Animations**: Hardware-accelerated CSS transforms
- **Bundle Optimization**: Code splitting and tree shaking
- **SEO Optimized**: Meta tags and semantic HTML

## 📈 **SEO & Meta Tags**

- Open Graph tags for social media sharing
- Twitter Card support
- Proper meta descriptions and keywords
- Semantic HTML structure
- Accessibility features

## 🚀 **Deployment**

### **Netlify**
1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### **Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### **GitHub Pages**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://yourusername.github.io/portfolio"`
3. Add scripts: `"predeploy": "npm run build", "deploy": "gh-pages -d build"`
4. Deploy: `npm run deploy`

## 🤝 **Contributing**

Feel free to fork this project and customize it for your own portfolio:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 📞 **Contact**

**Hruthvik Naik**
- Email: hruthviknaik03@gmail.com
- Phone: +91 9481323171
- LinkedIn: [linkedin.com/in/hruthviknaik](https://linkedin.com/in/hruthviknaik)
- GitHub: [github.com/hruthviknaik](https://github.com/hruthviknaik)

---

**Designed & Developed with ❤️ by Hruthvik Naik**