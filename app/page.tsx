import Navigation from '@/components/Navigation';
import HeroBanner from '@/components/HeroBanner';
import CarModelsGrid from '@/components/CarModelsGrid';
import PromotionalBanner from '@/components/PromotionalBanner';
import Footer from '@/components/Footer';
import {
  mockNavigation,
  mockHeroBanner,
  mockCarModels,
  mockPromotionalBanners,
  mockFooterSections,
} from '@/lib/mockData';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation component - sticky at top */}
      <Navigation items={mockNavigation} />

      {/* Main content container */}
      <main className="flex-grow">
        {/* Hero Banner - full viewport section */}
        <HeroBanner banner={mockHeroBanner} />

        {/* Car Models Grid - responsive product showcase */}
        <CarModelsGrid models={mockCarModels} />

        {/* First Promotional Banner - full width promo section */}
        <PromotionalBanner promo={mockPromotionalBanners[0]} />

        {/* Second Promotional Banner - alternate theme for visual variety */}
        <PromotionalBanner
          promo={{
            ...mockPromotionalBanners[1],
            isDarkTheme: true,
          }}
        />
      </main>

      {/* Footer - page bottom */}
      <Footer sections={mockFooterSections} />
    </div>
  );
}
