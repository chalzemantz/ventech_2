import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
  className?: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  children,
  className = "",
}: HeroSectionProps) {
  return (
    <div
      className={`relative w-full py-24 md:py-32 ${className}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      {backgroundImage && <div className="absolute inset-0 bg-black/40" />}

      {/* Dark background fallback */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 mb-8">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
}
