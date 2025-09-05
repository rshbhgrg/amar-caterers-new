# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## Architecture Overview

This is a React-based catering business website built with:

- **Framework**: React 19 with Vite for fast development and building
- **Styling**: Tailwind CSS v4 with utility-first approach
- **UI Components**: Custom component library using class-variance-authority for variant management
- **Icons**: Lucide React for consistent iconography

### Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (Button, Logo)
│   └── sections/     # Page sections (Header, Hero, About, etc.)
├── lib/
│   └── utils.js      # Utility functions (cn for className merging)
├── App.jsx           # Main app component with page layout
└── main.jsx          # React entry point
```

### Component Architecture

- **Single Page Application**: All content rendered in App.jsx as sections
- **Section-based Layout**: Header, Hero, AboutUs, Services, Menu, Gallery, Testimonials, Contact, Footer
- **Responsive Design**: Mobile-first approach with responsive navigation
- **UI Components**: Uses class-variance-authority for consistent button variants and styling
- **Utility Function**: `cn()` function combines clsx and tailwind-merge for conditional styling

### Styling Patterns

- Tailwind CSS utility classes throughout
- Custom CSS variables likely defined for brand colors (amber-700 theme)
- Responsive breakpoints: mobile-first, lg breakpoint for desktop
- Backdrop blur and transparency effects for modern glass morphism

## Key Dependencies

- **React 19**: Latest React with modern features
- **Tailwind CSS v4**: Latest version with Vite plugin
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library
- **clsx + tailwind-merge**: Conditional class name utilities

- mantain history of changes you do in history.md