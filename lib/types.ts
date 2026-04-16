// TypeScript interfaces for AEM Content Fragments
// These match the Volvo Cars US content model

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

export interface PromotionalBanner {
  heading: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  isDarkTheme?: boolean;
}

export interface NavigationItem {
  label: string;
  href: string;
  submenu?: NavigationItem[];
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface PageContent {
  heroBanner: HeroBannerFragment;
  carModels: CarModelCard[];
  promotionalBanners: PromotionalBanner[];
  navigation: NavigationItem[];
}
