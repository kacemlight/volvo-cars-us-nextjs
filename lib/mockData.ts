// Mock content data — used when USE_AEM=false or when AEM returns null
// Replace these with real AEM content fragments when AEM API is ready

import type {
  HeroSection,
  CarModelsSection,
  FeatureHighlightsSection,
  FooterSection,
  PageMeta,
} from './types'

export const pageMeta: PageMeta = {
  pageTitle: 'Volvo Cars USA - Official Luxury Vehicles',
  metaDescription: 'Discover Volvo Cars USA. Premium luxury SUVs and sedans with innovative safety and Swedish design.',
  ogImageUrl: 'https://example.com/og-image.jpg',
  canonicalUrl: 'https://www.volvocars.com/us/',
  keywords: 'Volvo, luxury cars, SUV, sedan, safety, Swedish design',
  language: 'en-US',
  robots: 'index, follow',
}

export const heroSection: HeroSection = {
  headline: 'Redefining Luxury. One Innovation at a Time.',
  subheadline: 'Volvo Cars brings Swedish precision, innovative safety, and timeless design to the American road.',
  ctaLabel: 'Explore Models',
  ctaUrl: '#models',
  backgroundImageUrl: 'https://example.com/hero-bg.jpg',
  backgroundImageAlt: 'Volvo luxury sedan on open road',
}

export const carModelsSection: CarModelsSection = {
  sectionTitle: 'Our Models',
  sectionDescription: 'Discover the complete lineup of Volvo luxury vehicles. Each model combines innovation with Swedish heritage.',
  models: [
    {
      modelName: 'XC90',
      tagline: 'Premium 3-Row Luxury SUV',
      price: 'Starting at $65,900',
      imageUrl: 'https://example.com/xc90.jpg',
      imageAlt: 'Volvo XC90 luxury SUV',
      ctaLabel: 'Explore XC90',
      ctaUrl: 'https://www.volvocars.com/us/models/xc90',
    },
    {
      modelName: 'XC60',
      tagline: 'Midsize Luxury SUV',
      price: 'Starting at $45,300',
      imageUrl: 'https://example.com/xc60.jpg',
      imageAlt: 'Volvo XC60 luxury SUV',
      ctaLabel: 'Explore XC60',
      ctaUrl: 'https://www.volvocars.com/us/models/xc60',
    },
    {
      modelName: 'S90',
      tagline: 'Luxury Sedan',
      price: 'Starting at $52,400',
      imageUrl: 'https://example.com/s90.jpg',
      imageAlt: 'Volvo S90 luxury sedan',
      ctaLabel: 'Explore S90',
      ctaUrl: 'https://www.volvocars.com/us/models/s90',
    },
  ],
}

export const featureHighlightsSection: FeatureHighlightsSection = {
  sectionTitle: 'Why Volvo',
  sectionDescription: 'Four pillars define the Volvo difference: safety, sustainability, innovation, and design.',
  features: [
    {
      title: 'Uncompromising Safety',
      description: 'Volvo has championed car safety for over 90 years. Our commitment ensures every model includes advanced safety systems.',
      iconOrImageUrl: 'https://example.com/icon-safety.svg',
    },
    {
      title: 'Sustainable Luxury',
      description: 'We are committed to electrification. By 2030, all Volvo models will be fully electric.',
      iconOrImageUrl: 'https://example.com/icon-sustainability.svg',
    },
    {
      title: 'Innovation & Technology',
      description: 'Seamless connectivity, autonomous driving capabilities, and intuitive infotainment.',
      iconOrImageUrl: 'https://example.com/icon-innovation.svg',
    },
    {
      title: 'Scandinavian Design',
      description: 'Minimalist elegance meets premium craftsmanship. Every detail is thoughtfully considered.',
      iconOrImageUrl: 'https://example.com/icon-design.svg',
    },
  ],
}

export const footerSection: FooterSection = {
  columns: [
    {
      columnTitle: 'Models',
      links: [
        { label: 'XC90', url: 'https://www.volvocars.com/us/models/xc90' },
        { label: 'XC60', url: 'https://www.volvocars.com/us/models/xc60' },
        { label: 'S90', url: 'https://www.volvocars.com/us/models/s90' },
        { label: 'View All', url: 'https://www.volvocars.com/us/models' },
      ],
    },
    {
      columnTitle: 'Company',
      links: [
        { label: 'About Volvo', url: 'https://www.volvocars.com/us/about' },
        { label: 'Careers', url: 'https://careers.volvocars.com' },
        { label: 'Press', url: 'https://www.volvocars.com/us/news' },
        { label: 'Sustainability', url: 'https://www.volvocars.com/us/sustainability' },
      ],
    },
    {
      columnTitle: 'Support',
      links: [
        { label: 'Owner Portal', url: 'https://www.volvocars.com/us/owners' },
        { label: 'Service Centers', url: 'https://www.volvocars.com/us/service' },
        { label: 'Contact Us', url: 'https://www.volvocars.com/us/contact' },
        { label: 'FAQ', url: 'https://www.volvocars.com/us/faq' },
      ],
    },
    {
      columnTitle: 'Connect',
      links: [
        { label: 'Facebook', url: 'https://facebook.com/VolvoCarUSA' },
        { label: 'Instagram', url: 'https://instagram.com/VolvoCarUSA' },
        { label: 'Twitter', url: 'https://twitter.com/VolvoCarUSA' },
        { label: 'YouTube', url: 'https://youtube.com/VolvoCarUSA' },
      ],
    },
  ],
  copyrightText: '© 2026 Volvo Car USA, Inc. All rights reserved.',
  legalLinks: [
    { label: 'Privacy Policy', url: 'https://www.volvocars.com/us/privacy' },
    { label: 'Terms of Service', url: 'https://www.volvocars.com/us/terms' },
    { label: 'Cookie Policy', url: 'https://www.volvocars.com/us/cookies' },
    { label: 'Accessibility', url: 'https://www.volvocars.com/us/accessibility' },
  ],
}