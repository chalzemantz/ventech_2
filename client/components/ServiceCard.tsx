import { ReactNode } from "react";

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  className = "",
}: ServiceCardProps) {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow h-full flex flex-col ${className}`}
    >
      {icon && (
        <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
          <div className="text-primary text-2xl">{icon}</div>
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 flex-1">{description}</p>
    </div>
  );
}
