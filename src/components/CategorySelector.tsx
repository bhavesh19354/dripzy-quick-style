
import React from 'react';

interface Category {
  id: string;
  name: string;
  image: string;
}

interface CategorySelectorProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="relative">
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-transparent group-hover:ring-orange-200 transition-all"
              />
              {selectedCategory === category.id && (
                <div className="absolute inset-0 rounded-full ring-2 ring-orange-500"></div>
              )}
            </div>
            <span className={`text-sm font-medium transition-colors ${
              selectedCategory === category.id ? 'text-orange-500' : 'text-gray-700'
            }`}>
              {category.name}
            </span>
            {selectedCategory === category.id && (
              <div className="w-8 h-0.5 bg-orange-500 rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
