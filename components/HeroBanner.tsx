import { HeroBannerFragment } from '@/lib/types';

interface HeroBannerProps {
  banner: HeroBannerFragment;
}

export default function HeroBanner({ banner }: HeroBannerProps) {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('${banner.backgroundImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Creates subtle parallax effect on desktop
      }}
    >
      {/* Dark overlay to ensure text readability over background image */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Content overlay centered on screen */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main headline - large, bold typography for impact */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          {banner.title}
        </h1>

        {/* Subheadline - supporting text with slightly smaller size */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-8 font-light">
          {banner.subtitle}
        </p>

        {/* Call-to-action button */}
        <a
          href={banner.ctaLink}
          className="inline-block px-8 py-3 sm:px-10 sm:py-4 bg-white text-volvo-blue font-bold rounded hover:bg-volvo-lightgray transition duration-300 ease-in-out transform hover:scale-105"
        >
          {banner.ctaText}
        </a>
      </div>

      {/* Scroll indicator - subtle animation to guide user */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
