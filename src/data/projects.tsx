export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "Full Stack Developer" | "Frontend Developer" | "Backend Developer" | "Desktop Application" | "Computer Graphics";
  image: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  gradient: string;
  date: string;
  status: "Present" | "Completed";
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "neeramoy-desktop",
    title: "Neeramoy Desktop Application",
    shortDescription: "A powerful cross-platform desktop application built with Electron.js, Angular, and Node.js. Features offline support, data synchronization, customizable themes, and real-time updates across Windows, macOS, and Linux.",
    fullDescription: "Neeramoy Desktop is a powerful cross-platform desktop application built with modern web technologies. This application provides an intuitive interface and robust functionality to enhance your productivity. The platform features responsive UI, cross-platform support, offline functionality, data synchronization across devices, customizable themes, convenient keyboard shortcuts, and real-time updates.",
    category: "Desktop Application",
    image: "/projects/neeramoy-desktop.png",
    technologies: ["Angular", "Node.js", "Electron.js", "SQLite3", "PrimeNG", "TypeScript", "HTML", "CSS", "SCSS"],
    features: [
      "Responsive UI: Clean and intuitive user interface that adapts to different screen sizes",
      "Cross-platform: Works seamlessly on Windows, macOS, and Linux",
      "Offline Support: Use essential features even without internet connection",
      "Data Synchronization: Sync your data across multiple devices",
      "Customizable Themes: Choose from light, dark, and custom themes",
      "Keyboard Shortcuts: Boost productivity with convenient keyboard shortcuts",
      "Real-time Updates: Get the latest features and security patches automatically"
    ],
    githubUrl: "https://github.com/Rauf-17/Neeramoy_Desktop",
    gradient: "from-purple-500 to-pink-500",
    date: "2024",
    status: "Present"
  },
  {
    id: 2,
    slug: "queue-management-system",
    title: "Queue Management System",
    shortDescription: "A modern queue management system with real-time updates and notifications. Features customer and service desk management, responsive design, and seamless integration with backend services for various service environments.",
    fullDescription: "This repository hosts the frontend of a Queue Management System, built using Angular and Node.js. The system aims to streamline and optimize the process of managing queues for various service environments. With real-time updates, customer management, and service desk coordination, this system provides a complete solution for businesses.",
    category: "Full Stack Developer",
    image: "/projects/queue-management-system.png",
    technologies: ["Angular", "Node.js", "PrimeNG", "TypeScript", "WebSocket"],
    features: [
      "Modern user interface for queue management",
      "Integration with backend services (Node.js)",
      "Real-time updates and notifications",
      "Customer and service desk management",
      "Responsive design for desktop and mobile devices",
      "Queue analytics and reporting"
    ],
    githubUrl: "https://github.com/Rauf-17/queue-management-system",
    gradient: "from-cyan-500 to-blue-500",
    date: "2024",
    status: "Present"
  },
  {
    id: 3,
    slug: "portfolio-website",
    title: "Portfolio Website",
    shortDescription: "This neon-themed portfolio built with Next.js 15, Tailwind CSS 4, and Framer Motion, featuring smooth animations and dark mode.",
    fullDescription: "A modern and visually stunning portfolio website showcasing my skills, projects, and achievements. Built with the latest web technologies, this site features smooth animations, responsive design, and an intuitive user interface. The neon-themed design creates a unique and memorable browsing experience.",
    category: "Frontend Developer",
    image: "/projects/portfolio.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "React"],
    features: [
      "Fully responsive design ensuring smooth experience across desktop, tablet, and mobile",
      "Smooth animations and transitions powered by Framer Motion",
      "Dark mode with neon theme styling",
      "Project showcase with filtering and search",
      "SEO-optimized architecture for improved search engine visibility",
      "Fast-loading performance using modern optimization techniques"
    ],
    githubUrl: "https://github.com/Rauf-17/Portfolio-Website",
    liveUrl: "https://portfolio-demo.com",
    gradient: "from-orange-500 to-red-500",
    date: "2024",
    status: "Present"
  },
  {
    id: 4,
    slug: "popular-furniture-website",
    title: "Popular Furniture Website",
    shortDescription: "A full-featured e-commerce furniture platform built with Laravel and PHP. Features user and admin authentication, role-based permissions, automated backups, API authentication with Passport, and CAPTCHA security integration.",
    fullDescription: "Popular Furniture is a comprehensive e-commerce platform dedicated to showcasing, managing, and selling popular and trending furniture items. Built with Laravel and modern web technologies, this platform provides a robust solution for furniture businesses with advanced features like role management, automated backups, and secure API authentication.",
    category: "Full Stack Developer",
    image: "/projects/popular-furniture.png",
    technologies: ["PHP", "Laravel", "MySQL", "Passport", "Redis", "JavaScript"],
    features: [
      "User and Admin Authentication: Multiple guards for users and admins, with session and API token support",
      "Role & Permission Management: Roles and permissions managed through Eloquent models",
      "Session & Caching: Supports various session and cache drivers (file, database, Redis)",
      "Database & File Backups: Automated backups using Spatie's backup package",
      "CAPTCHA Integration: NoCaptcha for enhanced security on forms",
      "API Authentication: Laravel Passport configured for secure API access"
    ],
    githubUrl: "https://github.com/Rauf-17/Popular-Furniture",
    liveUrl: "https://popularfurniturebd.com/",
    gradient: "from-green-500 to-emerald-500",
    date: "2023",
    status: "Present"
  },
  {
    id: 5,
    slug: "pc-builder-component-shopping",
    title: "PC Builder & Component Shopping",
    shortDescription: "A comprehensive Windows desktop application for building custom PCs and shopping computer components. Features role-based access control with Admin, Staff, and Buyer roles, product management, order tracking, and inventory management.",
    fullDescription: "PC Builder and Component Shopping is a comprehensive Windows desktop application built with C# and WinForms. This application provides a complete solution for PC building enthusiasts and computer component retailers. With role-based access control, users can build custom PCs, manage inventory, track orders, and handle customer relationships efficiently.",
    category: "Desktop Application",
    image: "/projects/pc-builder.png",
    technologies: ["C#", "WinForms", "ADO.NET", "SQL Server"],
    features: [
      "Multi-user system with 3 types of users (Admin, Staff, Buyers)",
      "Admin capabilities: Buyer approval, staff management, product management, order tracking, stock monitoring",
      "Staff capabilities: Product management, order viewing, stock monitoring",
      "Buyer capabilities: PC building tool, product purchasing, order tracking",
      "Custom PC configuration and compatibility checking",
      "Inventory management with real-time stock updates"
    ],
    githubUrl: "https://github.com/Rauf-17/Projects/blob/main/PC%20Builder%20and%20Component%20Shopping.zip",
    gradient: "from-violet-500 to-purple-500",
    date: "2023",
    status: "Completed"
  },
  {
    id: 6,
    slug: "padma-bridge-3d-visualization",
    title: "Padma Bridge - 3D Visualization",
    shortDescription: "A 3D graphical representation of Bangladesh's iconic Padma Bridge using C++ and OpenGL. Features multiple environmental scenarios (day, night, rain), animated vehicles and boats, interactive scene switching, and real-time rendering.",
    fullDescription: "Architecture Marvel - Padma Bridge is a Computer Graphics final term project visualizing the iconic Padma Bridge in Bangladesh using C++ and OpenGL (FreeGLUT). This project demonstrates fundamental and intermediate computer graphics techniques such as 2D/3D drawing, transformations, basic animation, and scene management.",
    category: "Computer Graphics",
    image: "/projects/padma-bridge-1.png",
    technologies: ["C++", "OpenGL", "FreeGLUT", "Computer Graphics"],
    features: [
      "Multiple Scenarios: Switch between different environmental conditions (day, night, rainy)",
      "Animated Elements: Vehicles and boats move across and under the bridge",
      "User Controls: Use keyboard controls to interact with the animation and change scenes",
      "OpenGL Rendering: Uses FreeGLUT for windowing and input handling",
      "3D Transformations: Demonstrates rotation, scaling, and translation",
      "Real-time Animation: Smooth animations with frame-by-frame rendering"
    ],
    githubUrl: "https://github.com/Rauf-17/Computer-Graphics/tree/main/Architecture%20Marvel-%20Padma%20Bridge",
    gradient: "from-blue-500 to-cyan-500",
    date: "2023",
    status: "Completed"
  },
];