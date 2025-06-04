# Creative Portfolio Website

A modern, responsive portfolio/resume website built with React and Tailwind CSS, featuring glass morphism effects, smooth animations, and a professional dark gradient theme.

## 🌟 Features

- **Modern Design**: Dark gradient theme with glass morphism effects
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **Professional Sections**: Hero, About, Skills, Experience, Education, Projects, and Contact
- **Easy Customization**: Simple placeholder content replacement
- **Performance Optimized**: Fast loading and smooth user experience

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.0.0 or higher)
- npm (comes with Node.js)
- Git (for cloning the repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd portfolio-website
   ```

2. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - The website will automatically open at `http://localhost:3000`
   - If it doesn't open automatically, navigate to the URL manually

## 🧪 Testing Locally

### Development Testing

1. **Start the development server**
   ```bash
   cd frontend
   npm start
   ```

2. **Manual Testing Checklist**
   - [ ] Website loads at `http://localhost:3000`
   - [ ] All sections are visible and properly styled
   - [ ] Navigation links work and scroll smoothly
   - [ ] Images load correctly (headshot and project images)
   - [ ] Hover effects work on buttons and cards
   - [ ] Skills progress bars display correctly
   - [ ] Timeline in experience section is properly aligned
   - [ ] Contact information is displayed correctly
   - [ ] Responsive design works on different screen sizes

3. **Responsive Testing**
   - Open browser developer tools (F12)
   - Test different device sizes:
     - Desktop (1920x1080)
     - Tablet (768x1024)
     - Mobile (390x844)
   - Verify layout adapts properly

4. **Performance Testing**
   - Check page load speed
   - Verify smooth scrolling
   - Test animation performance

### Build Testing

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Serve production build locally**
   ```bash
   # Install serve globally if you haven't already
   npm install -g serve
   
   # Serve the build folder
   serve -s build -l 3000
   ```

3. **Test production build**
   - Navigate to `http://localhost:3000`
   - Verify all functionality works in production mode
   - Check that assets load correctly

## ☁️ Cloud Deployment

### Option 1: Netlify (Recommended for Static Sites)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [Netlify](https://www.netlify.com/)
   - Drag and drop the `build` folder to Netlify
   - Or connect your Git repository for automatic deployments

3. **Custom Domain (Optional)**
   - Configure custom domain in Netlify settings
   - Set up DNS records with your domain provider

### Option 2: Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Follow the prompts** to configure your deployment

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

### Option 4: AWS S3 + CloudFront

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Create S3 bucket**
   - Configure for static website hosting
   - Upload contents of `build` folder

3. **Set up CloudFront** (optional but recommended)
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom domain and SSL

### Option 5: Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```

3. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## 📂 Project Structure

```
portfolio-website/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── App.css         # Custom styles and animations
│   │   ├── index.js        # Entry point
│   │   └── index.css       # Global styles
│   ├── package.json        # Dependencies and scripts
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   └── postcss.config.js   # PostCSS configuration
└── README.md              # This file
```

## 🎨 Customization

### Updating Content

1. **Personal Information**
   - Edit `src/App.js`
   - Replace placeholder content with your information:
     - Name and title in Hero section
     - About section bio and stats
     - Skills and percentages
     - Work experience details
     - Education information
     - Project descriptions
     - Contact information

2. **Images**
   - Replace the headshot URL in the Hero section
   - Update project images in the Projects section
   - Ensure images are optimized for web (WebP format recommended)

3. **Colors and Styling**
   - Modify `src/App.css` for custom animations
   - Update `tailwind.config.js` for color scheme changes
   - Customize gradient colors in `src/App.js`

### Adding New Sections

1. **Create new section component** in `src/App.js`
2. **Add navigation link** in the header
3. **Style with Tailwind CSS** classes
4. **Test responsiveness** across devices

## 🔧 Environment Variables

Create a `.env` file in the frontend directory for any environment-specific settings:

```env
# Example environment variables
REACT_APP_SITE_URL=https://yoursite.com
REACT_APP_ANALYTICS_ID=your-analytics-id
```

## 🚨 Troubleshooting

### Common Issues

1. **Node modules error**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Port already in use**
   ```bash
   # Kill process on port 3000
   lsof -ti:3000 | xargs kill -9
   npm start
   ```

3. **Build fails**
   - Check for console errors
   - Verify all dependencies are installed
   - Ensure Node.js version is compatible

4. **Images not loading**
   - Check image URLs are accessible
   - Verify image paths are correct
   - Consider using relative paths for local images

### Performance Optimization

1. **Image Optimization**
   - Use WebP format when possible
   - Implement lazy loading for images
   - Optimize image sizes for different screen densities

2. **Bundle Optimization**
   - Analyze bundle size: `npm run build -- --analyze`
   - Implement code splitting if needed
   - Remove unused dependencies

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you encounter any issues or have questions:
- Check the troubleshooting section above
- Search existing issues on GitHub
- Create a new issue with detailed description

---

**Happy coding! 🚀**

Built with ❤️ using React and Tailwind CSS