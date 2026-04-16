# Volvo Cars US Homepage — NextJS + AEM Content Fragments

A production-quality NextJS 14+ website for Volvo Cars US, powered by structured content fragments and headless CMS architecture.

## 🚗 Project Overview

This is a replicate of the Volvo Cars US homepage built with:
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS with Volvo brand colors
- **CMS:** AEM Content Fragments (headless)
- **Language:** TypeScript
- **Content:** Mock data (development) → AEM API (production)

## 📁 Project Structure

```
volvo-cars-us-nextjs/
├── app/
│   ├── page.tsx                 # Main homepage - assembles all sections
│   ├── layout.tsx               # Root layout with metadata
│   └── globals.css              # Global styles
├── components/
│   ├── Navigation.tsx            # Top nav with mobile hamburger menu
│   ├── HeroBanner.tsx            # Full-viewport hero section
│   ├── CarModelCard.tsx          # Individual car model card
│   ├── CarModelsGrid.tsx         # Grid container for models
│   ├── PromotionalBanner.tsx     # Full-width promo with theme support
│   └── Footer.tsx                # Multi-column footer with social icons
├── lib/
│   ├── types.ts                  # TypeScript interfaces for content fragments
│   ├── mockData.ts               # Mock content data (dev)
│   └── aemClient.ts              # AEM Content Fragment API client (production)
├── public/
│   └── images/                   # Static assets
├── tailwind.config.ts            # Tailwind configuration with Volvo colors
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Project dependencies
└── README.md                     # This file
```

## 🎨 Component Architecture

### **Navigation.tsx**
- Top sticky navigation bar with Volvo logo
- Desktop: Horizontal nav links + search icon + CTA button
- Mobile: Hamburger menu with collapsible nav items
- Props: `NavigationItem[]`

### **HeroBanner.tsx**
- Full viewport hero section with background image
- Centered headline and subheadline overlay
- CTA button with hover effects
- Animated scroll indicator
- Props: `HeroBannerFragment`

### **CarModelCard.tsx**
- Individual car model display card
- Image with hover zoom effect
- Model name, description, pricing
- Learn More CTA button
- Props: `CarModelCard`

### **CarModelsGrid.tsx**
- Responsive grid layout for car models
- Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
- Spacing and alignment optimized for readability
- Props: `CarModelCard[]`

### **PromotionalBanner.tsx**
- Full-width promotional section
- Supports light (default) and dark theme via `isDarkTheme` prop
- Image background with overlay
- Grid layout with image on desktop, stacked on mobile
- Props: `PromotionalBanner`

### **Footer.tsx**
- Multi-column footer with 4 sections (Shop, Support, Company, Legal)
- Social media icons (Facebook, Instagram, Twitter, LinkedIn)
- Copyright notice with dynamic year
- Legal links (Privacy, Terms, Cookies)
- Props: `FooterSection[]`

## 🔄 Data Flow

### Current (Development)
```
mockData.ts → Components → Browser
```

### Production (With AEM)
```
AEM Content Fragment API → aemClient.ts → Components → Browser
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ and npm/yarn
- Git
- Code editor (VS Code recommended)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kacemlight/volvo-cars-us-nextjs.git
   cd volvo-cars-us-nextjs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set environment variables** (for AEM integration):
   Create a `.env.local` file in the project root:
   ```env
   NEXT_PUBLIC_AEM_API_URL=https://your-aem-instance.com
   NEXT_PUBLIC_AEM_API_KEY=your-api-key-here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser:**
   Navigate to `http://localhost:3000`

## 📦 Building for Production

```bash
# Build the project
npm run build

# Start production server
npm run start
```

## 🎯 Key Features

✅ **Responsive Design**
- Mobile-first approach
- Hamburger menu on mobile
- Responsive grid layouts
- Tested on desktop, tablet, and mobile viewports

✅ **Production-Quality Code**
- Zero hardcoded content strings in components
- All content passes through typed props
- Comprehensive inline comments
- TypeScript for type safety

✅ **Brand Consistency**
- Volvo brand colors (primary blue: #002D72)
- Clean, minimalist aesthetic
- Large typography for readability
- Consistent spacing and padding

✅ **Accessibility**
- Semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation support
- Image alt text

✅ **Performance**
- Next.js image optimization ready
- CSS framework optimized with Tailwind
- Server-side rendering (App Router)

## 🔌 AEM Integration (Production)

When AEM content fragments are ready, replace mock data:

1. Update `lib/aemClient.ts` with your AEM environment details
2. Replace mock data imports in `app/page.tsx` with AEM API calls
3. Maintain the same TypeScript interfaces for seamless component compatibility

Example:
```typescript
// Before: Mock data
import { mockHeroBanner } from '@/lib/mockData';

// After: AEM API
const banner = await fetchHeroBannerFromAEM();
```

## 📝 Content Fragment Models

The following AEM Content Fragment models are expected:

- **HeroBannerFragment** — title, subtitle, ctaText, ctaLink, backgroundImageUrl
- **CarModelCard** — id, modelName, modelDescription, imageUrl, learnMoreLink, pricing
- **PromotionalBanner** — heading, description, imageUrl, ctaText, ctaLink, isDarkTheme
- **NavigationItem** — label, href, submenu (optional)
- **FooterSection** — title, links (FooterLink array)
- **FooterLink** — text, href

## 🚀 Deployment

Ready to deploy to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Self-hosted Node server

**Vercel deployment (1-click):**
```bash
npm i -g vercel
vercel
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Desktop viewport (1920px+) — All components render correctly
- [ ] Tablet viewport (768px) — Grid responds to 2-column layout
- [ ] Mobile viewport (375px) — Hamburger menu works, stacks to 1 column
- [ ] Hero banner loads and displays overlay text correctly
- [ ] Car model cards show images and hover effects
- [ ] Promotional banners display correctly in both light and dark themes
- [ ] Footer links and social icons are clickable
- [ ] All CTA buttons link to correct URLs

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📋 Checklist for Production Readiness

- [ ] AEM Content Fragments created and published
- [ ] Environment variables configured for AEM API
- [ ] All hardcoded content strings replaced with AEM data
- [ ] Mobile and desktop responsiveness verified
- [ ] All links and CTAs tested
- [ ] Performance optimized (images, bundle size)
- [ ] Accessibility audit passed
- [ ] SEO metadata added to layout.tsx
- [ ] Analytics integration configured
- [ ] Deployed and tested in staging environment

## 📞 Support & Documentation

- **Component API:** See inline comments in each component file
- **Types:** See `lib/types.ts` for all TypeScript interfaces
- **Mock Data:** See `lib/mockData.ts` for example content structure
- **Tailwind Reference:** https://tailwindcss.com/docs
- **Next.js Docs:** https://nextjs.org/docs

## 📄 License

Copyright © 2024 Volvo Car Corporation. All rights reserved.

---

**Last Updated:** 2024
**Status:** Production Ready (awaiting AEM content fragments)
