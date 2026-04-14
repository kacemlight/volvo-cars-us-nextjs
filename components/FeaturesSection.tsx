import type { FeatureHighlightsSection } from '@/lib/types'

interface FeaturesSectionProps {
  data: FeatureHighlightsSection
}

export default function FeaturesSectionComponent({ data }: FeaturesSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-volvo-light" aria-labelledby="features-title">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 id="features-title" className="text-3xl md:text-4xl font-bold text-volvo-blue mb-4">
            {data.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.sectionDescription}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              {/* Feature icon/image */}
              {feature.iconOrImageUrl && (
                <div className="h-16 w-16 mb-4">
                  <img
                    src={feature.iconOrImageUrl}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Feature content */}
              <h3 className="text-2xl font-bold text-volvo-blue mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>

              {/* Optional CTA */}
              {feature.ctaLabel && feature.ctaUrl && (
                <a
                  href={feature.ctaUrl}
                  className="text-volvo-accent font-semibold hover:text-volvo-blue transition-colors duration-200"
                >
                  {feature.ctaLabel} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}