import type { HeroSection } from '@/lib/types'

interface HeroSectionProps {
  data: HeroSection
}

export default function HeroSectionComponent({ data }: HeroSectionProps) {
  return (
    <section
      className="relative w-full h-[600px] md:h-[700px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 60, 124, 0.5), rgba(0, 60, 124, 0.5)), url('${data.backgroundImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-label="Hero section"
    >
      {/* Content container */}
      <div className="relative z-10 max-w-3xl text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {data.headline}
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8">
          {data.subheadline}
        </p>
        <a
          href={data.ctaUrl}
          className="inline-block px-8 py-4 bg-volvo-accent text-white font-bold rounded hover:bg-volvo-blue transition-colors duration-200"
          aria-label={data.ctaLabel}
        >
          {data.ctaLabel}
        </a>
      </div>
    </section>
  )
}