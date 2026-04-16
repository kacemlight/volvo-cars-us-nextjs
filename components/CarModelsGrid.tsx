// Car Models Grid - displays all car model cards
import { CarModelCard } from '@/lib/types';
import CarModelCardComponent from './CarModelCard';

interface CarModelsGridProps {
  models: CarModelCard[];
}

export default function CarModelsGrid({ models }: CarModelsGridProps) {
  return (
    <section className="py-16 px-6 bg-volvo-lightgray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-volvo-blue mb-12">Our Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model) => (
            <CarModelCardComponent key={model.id} data={model} />
          ))}
        </div>
      </div>
    </section>
  );
}
