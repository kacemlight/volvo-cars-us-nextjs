import { fetchContentFragment } from './aem'
import * as mockData from './mockData'
import type {
  HeroSection,
  CarModelsSection,
  FeatureHighlightsSection,
  FooterSection,
  PageMeta,
} from './types'

const USE_AEM = process.env.USE_AEM === 'true'

/**
 * Load hero section content from AEM or mock data
 */
export async function getHeroSection(): Promise<HeroSection> {
  if (USE_AEM) {
    const aemData = await fetchContentFragment('volvo-us/hero-section')
    if (aemData) return aemData
  }
  return mockData.heroSection
}

/**
 * Load car models section from AEM or mock data
 */
export async function getCarModelsSection(): Promise<CarModelsSection> {
  if (USE_AEM) {
    const aemData = await fetchContentFragment('volvo-us/car-models')
    if (aemData) return aemData
  }
  return mockData.carModelsSection
}

/**
 * Load features section from AEM or mock data
 */
export async function getFeatureHighlightsSection(): Promise<FeatureHighlightsSection> {
  if (USE_AEM) {
    const aemData = await fetchContentFragment('volvo-us/features')
    if (aemData) return aemData
  }
  return mockData.featureHighlightsSection
}

/**
 * Load footer from AEM or mock data
 */
export async function getFooterSection(): Promise<FooterSection> {
  if (USE_AEM) {
    const aemData = await fetchContentFragment('volvo-us/footer')
    if (aemData) return aemData
  }
  return mockData.footerSection
}

/**
 * Load page metadata from AEM or mock data
 */
export async function getPageMeta(): Promise<PageMeta> {
  if (USE_AEM) {
    const aemData = await fetchContentFragment('volvo-us/page-meta')
    if (aemData) return aemData
  }
  return mockData.pageMeta
}