import { CarModelCard as CarModelCardType } from '@/lib/types';
import CarModelCard from './CarModelCard';

interface CarModelsGridProps {
  models: CarModelCardType[];
}

export default function CarModelsGrid({ models }: CarModelsGridProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Models
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our complete lineup of luxury and performance vehicles, from elegant sedans to versatile SUVs.
          </p>
        </div>

        {/* Responsive grid layout */}
        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {models.map((model) => (
            <CarModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </section>
  );
}
