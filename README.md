<<<<<<< HEAD
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
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> ae9b7fb7ca1d2dd6dba756aa5e7d061da0572365
