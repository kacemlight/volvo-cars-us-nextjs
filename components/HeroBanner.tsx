// Hero Banner component - large hero section with CTA
import { HeroBannerFragment } from '@/lib/types';

interface HeroBannerProps {
  data: HeroBannerFragment;
}

export default function HeroBanner({ data }: HeroBannerProps) {
  return (
    <section className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('${data.backgroundImageUrl}')`,
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 text-center text-white max-w-2xl px-6">
        <h1 className="text-5xl font-bold mb-4">{data.title}</h1>
        <p className="text-xl mb-8">{data.subtitle}</p>
        <a
          href={data.ctaLink}
          className="inline-block bg-volvo-blue hover:bg-volvo-lightblue px-8 py-3 rounded text-lg font-semibold transition"
        >
          {data.ctaText}
        </a>
      </div>
    </section>
  );
}
