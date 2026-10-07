# Project History

## 2026-10-08 - SEO and polish pass

### SEO
- **Prerendering**: production HTML used to ship an empty `<div id="root">`, so crawlers and link previews (WhatsApp, Facebook) saw no content. The build now renders the page to static HTML (`src/entry-server.jsx` + `scripts/prerender.js`) and `main.jsx` hydrates it. Verified: hydrates without errors and the menu toggle works
- **Head tags**: local-keyword title ("Vegetarian Wedding Caterers in Jodhpur"), new meta description, canonical, Open Graph and Twitter card, `lang="en-IN"`
- **Structured data**: JSON-LD `FoodEstablishment` with address, phone, email, founding year, cuisines and area served
- **New files**: `robots.txt`, `sitemap.xml` (with image entries), branded `og-image.jpg`, `apple-touch-icon.png`, `favicon-32.png`
- **Caching**: `vercel.json` gives `/images/*` 7 days + stale-while-revalidate and hashed `/assets/*` a 1-year immutable cache (images were `max-age=0`)
- Fixed the hero preload `imagesizes` to match the `<img sizes>` (it was mismatched, risking a double download); hero is `fetchpriority=high`

### UX and accessibility
- Phone-only bottom bar with Call and WhatsApp (`MobileActions.jsx`)
- Gallery: intrinsic width/height so the masonry doesn't jump as photos load; lightbox traps focus; caption no longer read twice
- Craft section: swapped a dessert photo that duplicated the hero for a chef's-hands shot
- Enquiry date picker no longer allows past dates
- Removed the unused `amar-caterers-logo.png` (714 KB, Gemini watermark)

## 2026-10-07 - Full redesign from client references + real event photos

### Inputs
- Client references: `amar-caterers (3).html` (preferred for font/style) and `amar-luxury-homepage.html`; content mixed from both
- 47 event photos from the client's Google Drive folder (named by intended section: home, about, events, expertise, food, stalls, service, gallery, testimonials, trust)

### What changed
- **Design system**: Cormorant Garamond + Jost, ivory/cream/wine/gold palette from reference 1, as Tailwind v4 `@theme` tokens in `index.css`; added `gold-ink` for AA-contrast gold text
- **Signature**: jharokha (Rajasthani arch) photo frame (`ui/ArchFrame.jsx`); the hero's gold outline draws once on load
- **Photos**: 44 photos converted to WebP at 1800px + 800px (8.1 MB total, from 304 MB originals) in `public/images/`, served via `ui/Photo.jsx` with srcset
- **Sections** (new order): Header, Hero ("Forty years. One standard."), PromiseBand, Story (coffee machines to dosa tawas to 1986 timeline), Occasions (6, photo-led), Food ("Quality you can taste", cuisines, dietary tags), LiveCounters (scrolling stall photo strip), Craft (menu approach + chefs), Standard (Quality/Taste/Consistency/Service), Gallery (masonry + keyboard lightbox), Testimonials, Process (4 steps), Contact, Footer
- **Enquiry form** now opens WhatsApp with the details pre-filled (there was no backend; it used to only `console.log`)
- **Contact details** centralised in `lib/contact.js` (real phones, Yahoo email, Sardarpura address, Google Maps link)
- **Removed**: AboutUs, Services, Menu sections; unused Button.jsx (referenced an undefined `Slot`); Vite template assets; placeholder map, newsletter form, fake social links, fake review ratings, invented stats
- New typographic wordmark replaces the navy/pink logo PNG (which also has a Gemini watermark); new wine/gold arch favicon

### Deliberately left out / needs client confirmation
- Reference 1's destination-weddings section (US/UK), "4,000+ events", "100,000+ guests", "minimum 50 guests" and "booked 9-14 months out", because none of these are verified
- Testimonial quotes are placeholders adapted from reference 1 (TODO in `Testimonials.jsx`)
- The founder in the origin story is not named. The footer keeps "Owned by Mr. Jairaj Sabnani" from the old site
- Skipped photos: `services-2` (Starbucks branding), `stalls-2` (another vendor's branding), `stalls-7` (branded ice-cream cups)

## 2025-09-05 - Initial Project Analysis and CLAUDE.md Creation

### Analysis Conducted
- Analyzed codebase structure and dependencies
- Identified React 19 + Vite + Tailwind CSS v4 architecture
- Reviewed component organization (ui/ and sections/ directories)
- Examined development workflow and build process

### Key Findings
- **Project Type**: Single-page catering business website
- **Tech Stack**: React 19, Vite, Tailwind CSS v4, Lucide React icons
- **Architecture**: Section-based layout with reusable UI components
- **Styling**: Utility-first CSS with amber color theme
- **Build Tools**: Vite for development and production builds
- **Code Quality**: ESLint configuration with React-specific rules

### CLAUDE.md Created
- Added comprehensive development commands (dev, build, lint, preview)
- Documented project architecture and component structure
- Outlined key dependencies and their purposes
- Included styling patterns and responsive design approach
- Maintained user's personal instruction about history tracking

### Project Structure Documented
```
src/
├── components/
│   ├── ui/           # Button, Logo components with variants
│   └── sections/     # Header, Hero, About, Services, Menu, Gallery, Testimonials, Contact, Footer
├── lib/
│   └── utils.js      # cn() utility for className merging
├── App.jsx           # Main layout with all sections
└── main.jsx          # React root entry point
```

## 2025-09-05 - Business Information Updates

### Changes Made
Updated website content to reflect accurate business information:

#### Service Area Expansion
- **Old**: Services limited to Rajasthan
- **New**: Pan India catering services
- Updated in: index.html meta description, Contact, Footer, Hero, Services, AboutUs sections

#### Menu Clarification
- **Removed**: All non-vegetarian menu items and categories
- **Updated**: Menu description to specify "vegetarian menu"
- **Added**: Replacement vegetarian starter items (Stuffed Mushrooms, Aloo Tikki Chat)
- **Maintained**: Special dietary options section highlighting vegetarian, Jain, and vegan options

#### Files Modified
1. `index.html` - Meta description updated to "vegetarian catering services across India"
2. `src/components/sections/Menu.jsx` - Removed non-veg category and items, added vegetarian alternatives
3. `src/components/sections/Contact.jsx` - Changed "Rajasthan" to "India" in service area description
4. `src/components/sections/Footer.jsx` - Updated service areas to include major Indian cities, emphasized vegetarian services
5. `src/components/sections/Hero.jsx` - Updated to "India's most trusted vegetarian caterers"
6. `src/components/sections/Services.jsx` - Updated description to mention "vegetarian catering services" and "all across India"
7. `src/components/sections/AboutUs.jsx` - Updated company description to reflect India-wide vegetarian catering

### Business Positioning
- Emphasized vegetarian specialization throughout the website
- Expanded from regional (Rajasthan) to national (India) service coverage
- Maintained brand heritage and quality messaging while updating scope