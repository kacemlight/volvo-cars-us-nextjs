import type { CarModelsSection } from '@/lib/types'

interface CarModelsSectionProps {
  data: CarModelsSection
}

export default function CarModelsSectionComponent({ data }: CarModelsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby="models-title">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 id="models-title" className="text-3xl md:text-4xl font-bold text-volvo-blue mb-4">
            {data.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.sectionDescription}
          </p>
        </div>

        {/* Models grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.models.map((model) => (
            <div
              key={model.modelName}
              className="bg-volvo-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              {/* Model image */}
              <div className="relative h-64 bg-gray-300 overflow-hidden">
                <img
                  src={model.imageUrl}
                  alt={model.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Model info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-volvo-blue mb-2">
                  {model.modelName}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {model.tagline}
                </p>
                <p className="text-lg font-semibold text-volvo-accent mb-6">
                  {model.price}
                </p>
                <a
                  href={model.ctaUrl}
                  className="inline-block px-6 py-2 bg-volvo-blue text-white font-bold rounded hover:bg-volvo-accent transition-colors duration-200"
                >
                  {model.ctaLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}