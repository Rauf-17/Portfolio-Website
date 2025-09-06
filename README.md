# Portfolio Website

A modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework**: Next.js 15.5.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: GSAP 3.13.0
- **Component Libraries**:
  - PrimeReact
  - Shadcn UI
  - ReactBits

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Home page
│   │   ├── globals.css      # Global styles with Tailwind v4
│   │   └── favicon.ico
│   ├── components/
│   │   ├── reactbits/       # ReactBits components
│   │   ├── primereact/      # PrimeReact components
│   │   └── shadcn/          # Shadcn UI components
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/                  # Static assets
└── package.json
```

## Component Organization

Components are organized into three main folders:

### 1. ReactBits (`src/components/reactbits/`)
Custom React components and utilities

### 2. PrimeReact (`src/components/primereact/`)
PrimeReact component wrappers and customizations

### 3. Shadcn (`src/components/shadcn/`)
Shadcn UI components

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

## Development

- Each component folder has an `index.ts` file for easy imports
- Use Tailwind CSS v4 classes for styling
- Follow TypeScript best practices
- Keep components modular and reusable

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript support
- ✅ Tailwind CSS v4 with custom theme
- ✅ Dark mode ready
- ✅ GSAP animations
- ✅ PrimeReact integration
- ✅ Organized component structure
- ✅ Optimized for production

## Customization

### Theme Colors
Edit `src/app/globals.css` to customize the color scheme:
- Light mode colors in `:root`
- Dark mode colors in `.dark`

### Fonts
Update font imports in `src/app/layout.tsx`

### Metadata
Update SEO metadata in `src/app/layout.tsx`

## License

MIT
