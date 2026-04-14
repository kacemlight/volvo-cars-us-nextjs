// TypeScript interfaces for all content types consumed by the homepage

export interface HeroSection {
  headline: string
  subheadline: string
  ctaLabel: string
  ctaUrl: string
  backgroundImageUrl: string
  backgroundImageAlt: string
}

export interface NavigationItem {
  label: string
  url: string
  isExternal: boolean
}

export interface CarModel {
  modelName: string
  tagline: string
  price: string
  imageUrl: string
  imageAlt: string
  ctaLabel: string
  ctaUrl: string
}

export interface CarModelsSection {
  sectionTitle: string
  sectionDescription: string
  models: CarModel[]
}

export interface Feature {
  title: string
  description: string
  iconOrImageUrl: string
  ctaLabel?: string
  ctaUrl?: string
}

export interface FeatureHighlightsSection {
  sectionTitle: string
  sectionDescription: string
  features: Feature[]
}

export interface FooterLink {
  label: string
  url: string
}

export interface FooterColumn {
  columnTitle: string
  links: FooterLink[]
}

export interface LegalLink {
  label: string
  url: string
}

export interface FooterSection {
  columns: FooterColumn[]
  copyrightText: string
  legalLinks: LegalLink[]
}

export interface PageMeta {
  pageTitle: string
  metaDescription: string
  ogImageUrl: string
  canonicalUrl: string
  keywords: string
  language: string
  robots: string
}