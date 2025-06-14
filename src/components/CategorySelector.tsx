import React from 'react';
import { ArrowRight } from 'lucide-react';

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
  onCategoryChange
}) => {
  return (
    <div className="bg-black px-4 py-2 my-0">
      <div className="flex items-center gap-4 my-[3px] mx-[4px]">
        {/* Explore Trending Products Item */}
        <div className="flex flex-col items-center gap-1 group cursor-pointer min-w-[80px]">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="relative z-10 text-white text-xs font-bold text-center leading-tight">
              <div>FLAT</div>
              <div className="text-yellow-300">EXPLORE</div>
            </div>
          </div>
          <span className="text-xs font-medium text-white text-center leading-tight">
            Explore<br />Trending
          </span>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-xs text-white">Explore</span>
            <ArrowRight className="w-3 h-3 text-white" />
          </div>
        </div>

        {/* Existing Categories */}
        <div className="flex justify-between items-center gap-4 flex-1">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className="flex flex-col items-center gap-1 group"
            >
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent group-hover:ring-orange-200 transition-all"
                />
                {selectedCategory === category.id && (
                  <div className="absolute inset-0 rounded-full ring-2 ring-orange-500"></div>
                )}
              </div>
              <span className={`text-xs font-medium transition-colors ${
                selectedCategory === category.id ? 'text-orange-500' : 'text-white'
              }`}>
                {category.name}
              </span>
              {selectedCategory === category.id && (
                <div className="w-6 h-0.5 bg-orange-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
