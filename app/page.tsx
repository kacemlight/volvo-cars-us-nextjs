// Home page - main Volvo Cars US homepage
import { fetchPageContent } from '@/lib/aem';
import Navigation from '@/components/Navigation';
import HeroBanner from '@/components/HeroBanner';
import CarModelsGrid from '@/components/CarModelsGrid';
import PromotionalBanner from '@/components/PromotionalBanner';
import Footer from '@/components/Footer';

export default async function Home() {
  // Fetch content from AEM (or mock data if not configured)
  const content = await fetchPageContent();

  return (
    <main>
      {/* Navigation */}
      <Navigation items={content.navigation} />

      {/* Hero Banner */}
      <HeroBanner data={content.heroBanner} />

      {/* Car Models Section */}
      <CarModelsGrid models={content.carModels} />

      {/* Promotional Banners */}
      {content.promotionalBanners.map((banner, index) => (
        <PromotionalBanner key={index} data={banner} />
      ))}

      {/* Footer */}
      <Footer />
    </main>
  );
}
