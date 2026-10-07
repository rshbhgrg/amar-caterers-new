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
- **UI Components**: Small custom components in `components/ui` (no component library)
- **Icons**: Lucide React for consistent iconography

### Project Structure

```
public/images/        # Event photos as name.webp (1800px) + name-sm.webp (800px)
src/
├── components/
│   ├── ui/           # Logo (wordmark), Photo (srcset img), ArchFrame (jharokha arch clip + gold outline)
│   └── sections/     # Header, Hero, PromiseBand, Story, Occasions, Food, LiveCounters,
│                     # Craft, Standard, Gallery, Testimonials, Process, Contact, Footer
├── lib/
│   ├── utils.js      # cn() for className merging
│   └── contact.js    # Phones, email, address, WhatsApp link builder (single source)
├── index.css         # Tailwind v4 @theme tokens + shared classes (.wrap, .eyebrow, .h2, .btn, .field)
├── App.jsx           # Page layout; renders <ArchDefs/> once for the arch clipPath
└── main.jsx
```

### Design System

- Based on the client's preferred reference (Cormorant Garamond + Jost; ivory/cream/wine/gold)
- Tokens in `src/index.css` `@theme`: `ivory`, `cream`, `wine`, `wine-deep`, `gold` (decorative), `gold-ink` (gold text on light bg, AA contrast), `gold-light` (on dark bg), `ink`, `body`, `muted`, `line`
- Fonts: `font-display` (Cormorant Garamond, headings + italic `.voice`), `font-body` (Jost)
- Square corners (1px radius), hairline `border-line` dividers, no card shadows
- Signature element: `ArchFrame` jharokha arch. Only the hero uses `animate` (gold outline draws once); respect `prefers-reduced-motion`
- Adding a photo: export both `name.webp` and `name-sm.webp` to `public/images/`, render with `<Photo name="..." alt="..." sizes="..." />`
- Enquiry form has no backend: it opens WhatsApp with a pre-filled message (`whatsappLink` in `lib/contact.js`)
- Content rule: don't add unverified stats, service areas or testimonials. Real contact details live in `lib/contact.js`

## Key Dependencies

- **React 19**: Latest React with modern features
- **Tailwind CSS v4**: Latest version with Vite plugin
- **lucide-react**: Icon library
- **clsx + tailwind-merge**: Conditional class name utilities

- mantain history of changes you do in history.md