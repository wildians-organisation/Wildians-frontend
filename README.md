# Wildians Static Website

This repository hosts a clean, static version of the Wildians website built with Next.js and Tailwind CSS. This version serves as a showcase website without interactive features like NFT minting, blockchain integration, or user authentication.

## Technologies

- **Next.js** - React framework for building high-quality web applications with static site generation
- **Tailwind CSS** - Utility-first CSS framework for rapid and flexible styling development
- **React** - JavaScript library for building user interfaces
- **TypeScript** - Adds static type definitions to JavaScript

## Features

- Responsive design optimized for all devices
- Static site generation for optimal performance
- Landing page with project information
- Team section
- Concept and usage explanations
- Clean, modern UI design

## Prerequisites

Before proceeding, ensure you have Node.js and a package manager installed:

- **Node.js**: minimum version 18
- **Yarn**: recommended version 1.22 (or npm)

### Install Node.js

1. Go to the Node.js website: https://nodejs.org/en
2. Download and run the installer
3. Verify installation:
   ```bash
   node --version
   ```

### Install Yarn (Optional)

```bash
npm install --global yarn
```

Verify installation:
```bash
yarn --version
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Wildians-frontend
   ```

2. **Install dependencies**
   ```bash
   yarn
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Build for production**
   ```bash
   yarn build
   # or
   npm run build
   ```

The static files will be generated in the `out/` directory.

## Project Structure

```
├── components/          # Reusable React components
│   ├── Header/         # Website header
│   ├── LandingPage/    # Landing page sections
│   └── Dropdowns/      # Navigation dropdowns
├── pages/              # Next.js pages
├── public/             # Static assets (images, fonts)
├── styles/             # CSS files
└── config/             # Configuration files
```

## Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn prettier` - Format code with Prettier

## Deployment

This static website can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web server

Simply run `yarn build` and upload the contents of the `out/` directory.

## License

MIT License
