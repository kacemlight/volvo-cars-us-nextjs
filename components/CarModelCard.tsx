import { CarModelCard as CarModelCardType } from '@/lib/types';

interface CarModelCardProps {
  model: CarModelCardType;
}

export default function CarModelCard({ model }: CarModelCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      {/* Image container with aspect ratio preservation */}
      <div className="relative w-full pb-3/4 overflow-hidden bg-gray-100 group">
        <img
          src={model.imageUrl}
          alt={model.modelName}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Model name - bold heading */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{model.modelName}</h3>

        {/* Model description - supporting copy */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
          {model.modelDescription}
        </p>

        {/* Pricing information */}
        {model.pricing && (
          <p className="text-volvo-blue font-semibold text-lg mb-4">{model.pricing}</p>
        )}

        {/* Learn More CTA button - always at bottom */}
        <a
          href={model.learnMoreLink}
          className="inline-block px-6 py-2 border-2 border-volvo-blue text-volvo-blue hover:bg-volvo-blue hover:text-white transition duration-300 rounded font-semibold text-center"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
