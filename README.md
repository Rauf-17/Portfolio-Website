# Portfolio Website — Raufull Islam Rauf

A modern, interactive portfolio website showcasing projects, skills, and professional experience. Built with Next.js 15, TypeScript, and cutting-edge web technologies.

🌐 **Live Site**: [raufislam.me](https://raufislam.me)

## ✨ Features

- 🎨 Stunning 3D tilt-effect profile card with holographic animations
- 🌓 Dark/Light theme support with smooth transitions
- 📱 Fully responsive design for all devices
- ⚡ Optimized performance with Next.js App Router
- 🎭 GSAP-powered smooth animations
- 🔍 SEO-optimized with proper metadata
- 📊 Integrated Vercel Analytics
- ♿ Accessible UI components

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.3 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP 3.13.0
- **UI Components**:
  - PrimeReact (UI component library)
  - Shadcn UI (Accessible components)
  - ReactBits (Custom components)
- **Icons**: PrimeIcons
- **Analytics**: Vercel Analytics
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout with metadata & providers
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles with Tailwind v4
│   │   └── favicon.ico
│   ├── components/
│   │   ├── reactbits/           # Custom React components
│   │   │   ├── profile-card.tsx # Animated profile card
│   │   │   └── profile-card.css # Card styles
│   │   ├── header/              # Header component
│   │   ├── footer/              # Footer & scroll-to-top
│   │   ├── theming/             # Theme provider
│   │   ├── primereact/          # PrimeReact components
│   │   └── shadcn/              # Shadcn UI components
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
├── LICENSE                      # MIT License
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rauf-17/Portfolio-Website.git
   cd Portfolio-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server locally
npm start

# Lint code
npm run lint
```

## 🎨 Customization

### Theme Colors

Edit `src/app/globals.css` to customize colors:

```css
:root {
  /* Light mode colors */
  --background: #ffffff;
  --foreground: #000000;
}

.dark {
  /* Dark mode colors */
  --background: #000000;
  --foreground: #ffffff;
}
```

### Profile Card

Customize the profile card in `src/components/reactbits/profile-card.tsx`:

```tsx
<ProfileCard
  avatarUrl="/your-avatar.png"
  name="Your Name"
  title="Your Title"
  enableTilt={true}
  showBehindGradient={true}
/>
```

### Metadata & SEO

Update SEO settings in `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Your Name | Portfolio",
  description: "Your custom description",
};
```

## 🎯 Component Organization

### ReactBits Components
Custom interactive components with advanced animations

### PrimeReact Components
Pre-built UI components with consistent theming

### Shadcn Components
Accessible, customizable UI primitives

## 📦 Environment Variables

Create a `.env.local` file for environment-specific configuration:

```bash
NEXT_PUBLIC_SITE_URL=https://raufislam.me
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

**Note**: Never commit `.env.local` to version control

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

This Next.js app can be deployed to any platform supporting Node.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Raufull Islam Rauf**  
Junior Software Engineer

- Website: [raufislam.me](https://raufislam.me)
- GitHub: [@Rauf-17](https://github.com/Rauf-17)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and analytics
- PrimeReact, Shadcn UI, and the open-source community

---

⭐ If you found this project helpful, please consider giving it a star!
