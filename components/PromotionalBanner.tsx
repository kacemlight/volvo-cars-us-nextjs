// Promotional Banner component
import { PromotionalBanner as PromotionalBannerType } from '@/lib/types';

interface PromotionalBannerProps {
  data: PromotionalBannerType;
}

export default function PromotionalBanner({ data }: PromotionalBannerProps) {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="order-2 md:order-1">
          <img
            src={data.imageUrl}
            alt={data.heading}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        
        {/* Content */}
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold text-volvo-blue mb-4">{data.heading}</h2>
          <p className="text-gray-600 text-lg mb-6">{data.description}</p>
          <a
            href={data.ctaLink}
            className="inline-block bg-volvo-blue text-white px-8 py-3 rounded hover:bg-volvo-lightblue transition"
          >
            {data.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
