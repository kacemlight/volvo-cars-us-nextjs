import { PromotionalBanner as PromotionalBannerType } from '@/lib/types';

interface PromotionalBannerProps {
  promo: PromotionalBannerType;
}

export default function PromotionalBanner({ promo }: PromotionalBannerProps) {
  // Determine text color based on theme - dark theme uses light text, light uses dark
  const isDark = promo.isDarkTheme ?? false;
  const textColorClass = isDark ? 'text-white' : 'text-gray-900';
  const descriptionColorClass = isDark ? 'text-gray-100' : 'text-gray-600';
  const ctaButtonClass = isDark
    ? 'bg-white text-gray-900 hover:bg-gray-100'
    : 'bg-volvo-blue text-white hover:bg-volvo-lightblue';

  return (
    <section
      className={`relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Background image with overlay for visual depth */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('${promo.imageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content container with max width constraint */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <div>
            {/* Promotional heading */}
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${textColorClass}`}>
              {promo.heading}
            </h2>

            {/* Promotional description */}
            <p className={`text-lg leading-relaxed mb-8 ${descriptionColorClass}`}>
              {promo.description}
            </p>

            {/* Call-to-action button */}
            <a
              href={promo.ctaLink}
              className={`inline-block px-8 py-3 rounded font-semibold transition duration-300 hover:scale-105 transform ${
                ctaButtonClass
              }`}
            >
              {promo.ctaText}
            </a>
          </div>

          {/* Promotional image (optional visual element) */}
          <div className="hidden lg:block">
            <img
              src={promo.imageUrl}
              alt={promo.heading}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
