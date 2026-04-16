# Component Documentation — Volvo Cars US Homepage

This document provides detailed specifications for each component, including props, styling, and usage patterns.

## Navigation Component

### File: `components/Navigation.tsx`

#### Props
```typescript
interface NavigationProps {
  items: NavigationItem[];
}

interface NavigationItem {
  label: string;
  href: string;
  submenu?: NavigationItem[];
}
```

#### Features
- **Desktop:** Horizontal navigation bar with Volvo logo, nav links, search icon, and "Build & Price" CTA
- **Mobile:** Hamburger menu that toggles a collapsible navigation drawer
- **Styling:** White background, sticky positioning (z-50), subtle shadow
- **Interactions:** Menu icon changes to X when open; clicking a link closes the menu

#### Usage
```tsx
<Navigation items={navigationItems} />
```

#### Responsive Breakpoints
- `md:` (768px) — Show desktop nav, hide hamburger
- Below `md:` — Show hamburger, hide desktop nav

---

## Hero Banner Component

### File: `components/HeroBanner.tsx`

#### Props
```typescript
interface HeroBannerProps {
  banner: HeroBannerFragment;
}

interface HeroBannerFragment {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImageUrl: string;
}
```

#### Features
- **Full Viewport Coverage:** `h-screen` takes entire browser height
- **Background Image:** CSS `backgroundAttachment: fixed` creates subtle parallax on scroll
- **Dark Overlay:** 40% opacity black overlay ensures text readability over image
- **Centered Content:** Flexbox centers text and CTA button
- **Scroll Indicator:** Animated bouncing arrow at bottom directs user to scroll

#### Styling
- Text color: White
- Headline: 4xl (mobile) → 6xl (desktop), bold
- Subheadline: Smaller, lighter weight
- CTA: White button with hover scale effect

#### Usage
```tsx
<HeroBanner banner={heroBannerData} />
```

---

## Car Model Card Component

### File: `components/CarModelCard.tsx`

#### Props
```typescript
interface CarModelCardProps {
  model: CarModelCard;
}

interface CarModelCard {
  id: string;
  modelName: string;
  modelDescription: string;
  imageUrl: string;
  learnMoreLink: string;
  pricing?: string;
}
```

#### Features
- **Image Container:** Aspect ratio preserved, hover zoom effect (scale-105)
- **Card Layout:** White background with shadow, increased shadow on hover
- **Content Sections:** Model name (bold), description, pricing (optional), CTA
- **Flexible Height:** `flex flex-col flex-grow` pushes CTA to bottom regardless of content length
- **CTA Button:** Bordered button with color change on hover

#### Styling
- Background: White
- Shadow: Subtle (md), enhanced on hover (xl)
- Text: Gray palette with blue accents
- Spacing: Consistent padding, generous gaps between sections

#### Usage
```tsx
<CarModelCard model={carModel} />
```

---

## Car Models Grid Component

### File: `components/CarModelsGrid.tsx`

#### Props
```typescript
interface CarModelsGridProps {
  models: CarModelCard[];
}
```

#### Features
- **Responsive Grid:** Maps models to `<CarModelCard>` components
- **Section Styling:** Gray background (`bg-gray-50`), generous vertical padding
- **Header:** Large centered section title with description

#### Responsive Layout
- Mobile: `grid-cols-1` (1 column)
- Tablet (sm): `grid-cols-2` (2 columns)
- Desktop (lg): `grid-cols-3` (3 columns)
- Gap: 6px (mobile), 8px (desktop) for spacing

#### Usage
```tsx
<CarModelsGrid models={carModels} />
```

---

## Promotional Banner Component

### File: `components/PromotionalBanner.tsx`

#### Props
```typescript
interface PromotionalBannerProps {
  promo: PromotionalBanner;
}

interface PromotionalBanner {
  heading: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  isDarkTheme?: boolean;
}
```

#### Features
- **Theme Aware:** Light theme (default) or dark theme
- **Background Image:** Positioned as subtle background with 20% opacity
- **Two-Column Layout:** Text on left (all viewports), image on right (desktop only)
- **Dynamic CTA:** Button styling changes based on theme

#### Light Theme
- Background: White
- Text: Dark gray/black
- CTA Button: Volvo blue with white hover

#### Dark Theme
- Background: Dark gray (900)
- Text: White/light gray
- CTA Button: White with dark hover

#### Usage
```tsx
// Light theme (default)
<PromotionalBanner promo={promotion} />

// Dark theme
<PromotionalBanner promo={{ ...promotion, isDarkTheme: true }} />
```

---

## Footer Component

### File: `components/Footer.tsx`

#### Props
```typescript
interface FooterProps {
  sections: FooterSection[];
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterLink {
  text: string;
  href: string;
}
```

#### Features
- **Multi-Column Layout:** Responsive grid for footer sections
- **Social Icons:** 4 icon buttons (Facebook, Instagram, Twitter, LinkedIn) with hover effects
- **Dynamic Copyright:** Automatically updates year
- **Legal Links:** Privacy, Terms, Cookies in footer bottom

#### Layout
- Mobile: 2 columns
- Tablet (sm): 3 columns
- Desktop (lg): 4 columns

#### Styling
- Background: Dark gray (900)
- Text: Light gray (400) with white hover
- Social Icons: Circular buttons with blue hover state
- Borders: Subtle gray dividers between sections

#### Usage
```tsx
<Footer sections={footerSections} />
```

---

## Main Page Component

### File: `app/page.tsx`

#### Responsibilities
1. Imports all components
2. Imports mock data
3. Assembles components into full homepage layout
4. Manages overall page structure and flow

#### Structure
```tsx
<div> (flex flex-col min-h-screen)
  <Navigation />
  <main> (flex-grow)
    <HeroBanner />
    <CarModelsGrid />
    <PromotionalBanner /> (light theme)
    <PromotionalBanner /> (dark theme)
  </main>
  <Footer />
</div>
```

#### Component Order
1. **Navigation** — Top of page, sticky
2. **HeroBanner** — Full viewport hero section
3. **CarModelsGrid** — Product showcase with title and description
4. **PromotionalBanner #1** — Light theme (Financing Offers)
5. **PromotionalBanner #2** — Dark theme (Electrification)
6. **Footer** — Bottom of page

---

## Styling Conventions

### Color Palette
```css
--volvo-blue: #002D72;      /* Primary brand color */
--volvo-lightblue: #1a4d9f; /* Hover/secondary state */
--volvo-lightgray: #f5f5f5; /* Section backgrounds */
--volvo-darkgray: #333333;  /* Text color */
```

### Typography
- **Font:** System sans-serif stack (inherited from layout)
- **Headings:** Bold, large sizes for visual hierarchy
- **Body Text:** Regular weight, optimal line-height (1.5-1.75)
- **Links:** Hover states with color and underline

### Spacing
- **Sections:** Generous vertical padding (16px mobile → 24px desktop)
- **Components:** Consistent horizontal margins (4px → 8px)
- **Cards:** Uniform padding and gaps

### Responsive Breakpoints
```css
sm:  640px  /* Small devices */
md:  768px  /* Tablets */
lg:  1024px /* Large tablets / small desktops */
xl:  1280px /* Desktops */
2xl: 1536px /* Large desktops */
```

### Hover & Interactive States
- **Buttons:** Scale-105 transform on hover for subtle feedback
- **Images:** Scale-105 zoom on hover
- **Links:** Color change + underline
- **Cards:** Shadow enhancement on hover

---

## Mock Data Structure

### File: `lib/mockData.ts`

Contains production-quality mock data matching all TypeScript interfaces:

```typescript
export const mockNavigation: NavigationItem[]
export const mockHeroBanner: HeroBannerFragment
export const mockCarModels: CarModelCard[]
export const mockPromotionalBanners: PromotionalBanner[]
export const mockFooterSections: FooterSection[]
export const mockPageContent: PageContent
```

All mock data uses real-looking content (Volvo model names, realistic descriptions, Unsplash images).

---

## Production Notes

### Replacing Mock Data with AEM

1. **Keep TypeScript interfaces unchanged** — Components expect the same prop shape
2. **Update data sources:**
   ```tsx
   // Development
   import { mockHeroBanner } from '@/lib/mockData';
   
   // Production
   const heroBanner = await fetchFromAEM('hero-banner');
   ```
3. **Maintain async flow:** Use React Server Components or client-side `useEffect` for API calls
4. **Add error boundaries:** Handle missing or malformed AEM data gracefully

### Performance Optimization
- Images: Use Next.js `<Image>` component for optimization
- Lazy loading: Implement `loading="lazy"` on below-fold images
- Code splitting: Leverage Next.js automatic route-based splitting
- CSS: Tailwind purges unused styles automatically

### Accessibility Improvements
- Add skip navigation links
- Enhance color contrast ratios
- Add ARIA descriptions to complex layouts
- Test with screen readers

---

## Testing Component in Isolation

### Storybook Integration (Future)
```bash
npm install @storybook/react @storybook/nextjs
```

Example story:
```tsx
// components/HeroBanner.stories.tsx
export default {
  title: 'Components/HeroBanner',
  component: HeroBanner,
};

export const Default = {
  args: {
    banner: mockHeroBanner,
  },
};
```

---

## FAQ

**Q: Can I use these components with a different CMS?**
A: Yes! Keep the TypeScript interfaces the same, replace mock data with API calls to your CMS.

**Q: How do I customize colors?**
A: Edit `tailwind.config.ts` to update the `volvo-blue` and other color definitions.

**Q: Are components mobile-responsive?**
A: Yes, all components use Tailwind's responsive breakpoints (mobile-first approach).

**Q: How do I add new components?**
A: Follow the same pattern: accept props via TypeScript interface, use Tailwind for styling, import into `app/page.tsx`.

---

*Last updated: 2024*
