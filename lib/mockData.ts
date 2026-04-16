// Mock data for Volvo Cars US homepage
// This data matches the AEM Content Fragment types and is used for development
// Will be replaced with real AEM content fragment queries in production

import { PageContent, HeroBannerFragment, CarModelCard, PromotionalBanner, NavigationItem, FooterSection } from './types';

export const mockNavigation: NavigationItem[] = [
  { label: 'Models', href: '/models' },
  { label: 'Build & Price', href: '/build' },
  { label: 'Safety', href: '/safety' },
  { label: 'Electrification', href: '/electrification' },
  { label: 'About', href: '/about' },
];

export const mockHeroBanner: HeroBannerFragment = {
  title: 'Welcome to Volvo Cars',
  subtitle: 'Experience Swedish Safety and Innovation',
  ctaText: 'Explore Our Models',
  ctaLink: '#models',
  backgroundImageUrl: 'https://images.unsplash.com/photo-1581274455760-6c2ca0e4ceef?w=1920&h=1080&fit=crop',
};

export const mockCarModels: CarModelCard[] = [
  {
    id: 'xc90',
    modelName: 'XC90',
    modelDescription: 'Premium three-row luxury SUV with innovative safety features',
    imageUrl: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=400&fit=crop',
    learnMoreLink: '/models/xc90',
    pricing: 'Starting at $60,545',
  },
  {
    id: 'xc60',
    modelName: 'XC60',
    modelDescription: 'Midsize luxury SUV blending performance with sustainability',
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c3dec1806?w=500&h=400&fit=crop',
    learnMoreLink: '/models/xc60',
    pricing: 'Starting at $47,245',
  },
  {
    id: 'xc40',
    modelName: 'XC40',
    modelDescription: 'Compact luxury SUV designed for the modern driver',
    imageUrl: 'https://images.unsplash.com/photo-1590362891990-f8ddb41d3fcb?w=500&h=400&fit=crop',
    learnMoreLink: '/models/xc40',
    pricing: 'Starting at $36,995',
  },
  {
    id: 's90',
    modelName: 'S90',
    modelDescription: 'Luxury sedan offering Scandinavian design and advanced safety',
    imageUrl: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=400&fit=crop',
    learnMoreLink: '/models/s90',
    pricing: 'Starting at $54,545',
  },
  {
    id: 's60',
    modelName: 'S60',
    modelDescription: 'Midsize sedan combining elegance with innovative technology',
    imageUrl: 'https://images.unsplash.com/photo-1606611283684-ace0b52a57ce?w=500&h=400&fit=crop',
    learnMoreLink: '/models/s60',
    pricing: 'Starting at $42,595',
  },
  {
    id: 'c40',
    modelName: 'C40 Recharge',
    modelDescription: 'Fully electric performance SUV for the sustainable future',
    imageUrl: 'https://images.unsplash.com/photo-1618045614684-f1d34bb94590?w=500&h=400&fit=crop',
    learnMoreLink: '/models/c40-recharge',
    pricing: 'Starting at $52,795',
  },
];

export const mockPromotionalBanners: PromotionalBanner[] = [
  {
    heading: 'Exceptional Financing Offers',
    description: 'Get competitive rates and flexible terms on your next Volvo. Our summer sales event offers exclusive incentives on select models.',
    imageUrl: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&h=400&fit=crop',
    ctaText: 'View Current Offers',
    ctaLink: '/promotions',
  },
  {
    heading: 'Electrification Leadership',
    description: 'Discover our commitment to a sustainable future. From hybrid to fully electric, explore our expanding electrified lineup.',
    imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a63c0f3585?w=800&h=400&fit=crop',
    ctaText: 'Learn About Electric',
    ctaLink: '/electrification',
  },
];

export const mockFooterSections: FooterSection[] = [
  {
    title: 'Shop',
    links: [
      { text: 'Build & Price', href: '/build' },
      { text: 'Models', href: '/models' },
      { text: 'Used Vehicles', href: '/used' },
      { text: 'Inventory', href: '/inventory' },
    ],
  },
  {
    title: 'Support',
    links: [
      { text: 'Owner Resources', href: '/owners' },
      { text: 'Service & Parts', href: '/service' },
      { text: 'Recalls & Updates', href: '/recalls' },
      { text: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About Volvo', href: '/about' },
      { text: 'Careers', href: '/careers' },
      { text: 'Press', href: '/press' },
      { text: 'Sustainability', href: '/sustainability' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { text: 'Privacy Policy', href: '/privacy' },
      { text: 'Terms of Use', href: '/terms' },
      { text: 'Cookie Policy', href: '/cookies' },
      { text: 'Sitemap', href: '/sitemap' },
    ],
  },
];

export const mockPageContent: PageContent = {
  heroBanner: mockHeroBanner,
  carModels: mockCarModels,
  promotionalBanners: mockPromotionalBanners,
  navigation: mockNavigation,
};
