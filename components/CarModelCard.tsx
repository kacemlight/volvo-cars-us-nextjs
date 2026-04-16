// Car Model Card component - individual vehicle listing
import { CarModelCard as CarModelCardType } from '@/lib/types';

interface CarModelCardProps {
  data: CarModelCardType;
}

export default function CarModelCard({ data }: CarModelCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      {/* Image */}
      <div className="w-full h-64 bg-gray-200 overflow-hidden">
        <img
          src={data.imageUrl}
          alt={data.modelName}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-volvo-blue mb-2">{data.modelName}</h3>
        <p className="text-gray-600 mb-4">{data.modelDescription}</p>
        {data.pricing && (
          <p className="text-lg font-semibold text-gray-800 mb-4">{data.pricing}</p>
        )}
        <a
          href={data.learnMoreLink}
          className="inline-block bg-volvo-blue text-white px-6 py-2 rounded hover:bg-volvo-lightblue transition"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
