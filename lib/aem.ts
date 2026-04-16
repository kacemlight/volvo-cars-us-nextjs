// AEM Content Fragment API utility
// Fetches content from AEM Content Fragments via GraphQL or REST API

import { PageContent, HeroBannerFragment, CarModelCard, PromotionalBanner } from './types';

const AEM_BASE_URL = process.env.AEM_API_BASE_URL || 'https://author-p12345-e67890.adobeaemcloud.com';
const AEM_GRAPHQL_ENDPOINT = process.env.AEM_GRAPHQL_ENDPOINT || '/content/cq:graphql/default/execute.json';
const AEM_ACCESS_TOKEN = process.env.AEM_ACCESS_TOKEN || '';

/**
 * Fetch content fragments from AEM via GraphQL
 * @returns PageContent object with all fragments for the Volvo US homepage
 */
export async function fetchPageContent(): Promise<PageContent> {
  try {
    if (!AEM_ACCESS_TOKEN) {
      console.warn('AEM_ACCESS_TOKEN not set. Using mock data.');
      return getMockPageContent();
    }

    const response = await fetch(`${AEM_BASE_URL}${AEM_GRAPHQL_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AEM_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: getContentFragmentQuery(),
      }),
    });

    if (!response.ok) {
      throw new Error(`AEM API error: ${response.statusText}`);
    }

    const data = await response.json();
    return parseAemResponse(data);
  } catch (error) {
    console.error('Error fetching from AEM:', error);
    return getMockPageContent();
  }
}

/**
 * GraphQL query to fetch all content fragments for Volvo US homepage
 */
function getContentFragmentQuery(): string {
  return `
    query GetVolvoCarsUSContent {
      volvoHeroBannerCollection {
        items {
          title
          subtitle
          ctaText
          ctaLink
          backgroundImageUrl
        }
      }
      carModelsCollection {
        items {
          _path
          modelName
          modelDescription
          imageUrl
          learnMoreLink
          pricing
        }
      }
      promotionalBannersCollection {
        items {
          heading
          description
          imageUrl
          ctaText
          ctaLink
        }
      }
    }
  `;
}

/**
 * Parse AEM GraphQL response and transform to PageContent
 */
function parseAemResponse(data: any): PageContent {
  // Transform AEM response structure to PageContent
  // Implementation depends on actual AEM fragment structure
  return getMockPageContent();
}

/**
 * Mock data for development when AEM is not available
 */
function getMockPageContent(): PageContent {
  return {
    heroBanner: {
      title: 'Welcome to Volvo Cars',
      subtitle: 'Experience Swedish Safety and Innovation',
      ctaText: 'Explore Models',
      ctaLink: '#models',
      backgroundImageUrl: '/images/hero-banner.jpg',
    },
    carModels: [
      {
        id: 'xc90',
        modelName: 'XC90',
        modelDescription: 'Premium 3-row luxury SUV',
        imageUrl: '/images/xc90.jpg',
        learnMoreLink: '/models/xc90',
        pricing: 'Starting at $60,545',
      },
      {
        id: 'xc60',
        modelName: 'XC60',
        modelDescription: 'Midsize luxury SUV',
        imageUrl: '/images/xc60.jpg',
        learnMoreLink: '/models/xc60',
        pricing: 'Starting at $47,245',
      },
      {
        id: 's90',
        modelName: 'S90',
        modelDescription: 'Luxury sedan',
        imageUrl: '/images/s90.jpg',
        learnMoreLink: '/models/s90',
        pricing: 'Starting at $54,545',
      },
    ],
    promotionalBanners: [
      {
        heading: 'Summer Sales Event',
        description: 'Special financing offers on select models',
        imageUrl: '/images/promo-summer.jpg',
        ctaText: 'View Offers',
        ctaLink: '/promotions',
      },
    ],
    navigation: [
      { label: 'Models', href: '/models' },
      { label: 'Build & Price', href: '/build' },
      { label: 'Safety', href: '/safety' },
      { label: 'About', href: '/about' },
    ],
  };
}
