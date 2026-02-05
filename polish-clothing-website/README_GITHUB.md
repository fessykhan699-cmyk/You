# Polish Clothing Website

A modern, elegant e-commerce website for a Polish clothing brand built with React, TypeScript, and Vite. Features smooth animations, responsive design, and a beautiful UI powered by Tailwind CSS and shadcn/ui components.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎭 Beautiful UI components from shadcn/ui
- 🖼️ Product showcase with image galleries
- 📦 Collection displays
- 📧 Newsletter subscription
- 🎯 SEO-friendly

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 3
- **UI Components:** shadcn/ui + Radix UI
- **Animations:** Framer Motion (via embla-carousel)
- **Icons:** Lucide React
- **Form Handling:** React Hook Form + Zod

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure everything
6. Click "Deploy"

Your site will be live in minutes!

### Build Configuration

The project uses Vite's default build settings. The output goes to the `dist` folder.

## Project Structure

```
app/
├── src/
│   ├── components/      # Reusable UI components
│   ├── sections/        # Page sections (Hero, Products, etc.)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/             # Static assets
└── dist/              # Production build (generated)
```

## Customization

### Colors & Theme

Edit `tailwind.config.js` to customize the color scheme and theme settings.

### Content

- Update product images in `/public`
- Modify text content in `/src/sections`
- Adjust animations in component files

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.
