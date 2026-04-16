# Volvo Cars US NextJS Frontend

A modern NextJS 14+ application serving the Volvo Cars US homepage, powered by AEM Content Fragments.

## Overview

This project is a production-ready frontend for https://www.volvocars.com/us/, built with:

- **NextJS 14** (App Router)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **AEM Content Fragments** for content management

## Project Structure

```
/app
  layout.tsx           # Root layout with metadata
  page.tsx             # Home page
  globals.css          # Global styles

/components
  Navigation.tsx       # Top navigation bar
  HeroBanner.tsx       # Hero section with CTA
  CarModelsGrid.tsx    # Grid of car model cards
  CarModelCard.tsx     # Individual car model card
  PromotionalBanner.tsx # Promotional section
  Footer.tsx           # Footer with links

/lib
  aem.ts               # AEM Content Fragment API utilities
  types.ts             # TypeScript type definitions

/public
  images/              # Static assets (to be populated)

.env.local.example     # Environment configuration template
```

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure AEM Connection

Copy `.env.local.example` to `.env.local` and fill in your AEM details:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```
AEM_API_BASE_URL=https://author-p12345-e67890.adobeaemcloud.com
AEM_GRAPHQL_ENDPOINT=/content/cq:graphql/default/execute.json
AEM_ACCESS_TOKEN=your_bearer_token_here
```

**How to get your AEM credentials:**

- **Base URL**: Found in your AEM author instance URL
- **GraphQL Endpoint**: Standard path for AEM Cloud GraphQL
- **Access Token**: Generate in Adobe IMS console or AEM user settings

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

### Content Integration

All page content is fetched from AEM Content Fragments:

- **Hero Banner** — Hero section with title, subtitle, and CTA
- **Car Models** — Grid of vehicle listings with pricing and descriptions
- **Promotional Banners** — Marketing content sections
- **Navigation** — Dynamic top navigation menu

### Type-Safe Content

All content types are defined in `lib/types.ts`:

```typescript
export interface HeroBannerFragment {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImageUrl: string;
}

export interface CarModelCard {
  id: string;
  modelName: string;
  modelDescription: string;
  imageUrl: string;
  learnMoreLink: string;
  pricing?: string;
}
```

### AEM Content Fetching

`lib/aem.ts` provides utilities to fetch content:

```typescript
import { fetchPageContent } from '@/lib/aem';

const content = await fetchPageContent();
console.log(content.heroBanner.title);
```

- Fetches via AEM GraphQL API
- Falls back to mock data if AEM is unavailable
- Includes error handling and logging

## Development

### Run Linter

```bash
npm run lint
```

### Build for Production

```bash
npm run build
npm run start
```

## Responsive Design

The site is fully responsive:

- **Mobile** — Single column layout, touch-friendly
- **Tablet** — Two-column grids
- **Desktop** — Three-column grids and full-width layouts

Tailwind breakpoints used:
- `sm:` 640px
- `md:` 768px
- `lg:` 1024px
- `xl:` 1280px

## Styling

Brand colors are defined in `tailwind.config.ts`:

```typescript
colors: {
  volvo: {
    blue: '#003da5',      // Primary Volvo blue
    lightblue: '#1e5fa3', // Hover/secondary
    lightgray: '#f5f5f5', // Background
  },
}
```

## Environment Variables

See `.env.local.example` for all configuration options:

- `AEM_API_BASE_URL` — AEM author instance URL
- `AEM_GRAPHQL_ENDPOINT` — GraphQL API path
- `AEM_ACCESS_TOKEN` — Authentication bearer token
- `DEBUG` — Enable debug logging (optional)

## Testing

To test locally with mock data (without AEM):

1. Leave `AEM_ACCESS_TOKEN` blank or unset in `.env.local`
2. The app will automatically use mock data from `lib/aem.ts`
3. All components will render with sample Volvo content

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Add environment variables in Vercel dashboard.

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
```

## Troubleshooting

### AEM Connection Issues

- Verify `AEM_API_BASE_URL` is correct
- Check that `AEM_ACCESS_TOKEN` is valid
- Ensure CORS is configured on AEM instance
- Check browser console for detailed error messages

### Mock Data Not Showing

If mock data isn't showing but you expect it to:

1. Check `.env.local` — `AEM_ACCESS_TOKEN` should be empty or missing
2. Check console for error messages
3. Verify mock data in `lib/aem.ts` is not empty

## Contributing

1. Create a feature branch
2. Make changes
3. Run linter: `npm run lint`
4. Push to branch
5. Open pull request

## License

Copyright © 2024 Volvo Cars. All rights reserved.
