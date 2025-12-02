import { Button } from "@/components/ui/button";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  onViewDetails?: () => void;
}

export default function PortfolioCard({
  image,
  title,
  category,
  description,
  onViewDetails,
}: PortfolioCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      {/* Image */}
      <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-blue-100 text-primary text-xs font-semibold rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Button
          onClick={onViewDetails}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          More Details
        </Button>
      </div>
    </div>
  );
}
