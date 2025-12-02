interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  showAll?: boolean;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
  showAll = true,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
      {showAll && (
        <button
          onClick={() => onCategoryChange("all")}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            activeCategory === "all"
              ? "bg-primary text-white"
              : "bg-white text-gray-700 border border-gray-300 hover:border-primary hover:text-primary"
          }`}
        >
          All
        </button>
      )}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            activeCategory === category
              ? "bg-primary text-white"
              : "bg-white text-gray-700 border border-gray-300 hover:border-primary hover:text-primary"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
