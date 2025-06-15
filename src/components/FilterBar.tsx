
import React from 'react';
import { Filter, ArrowUp, ArrowDown } from 'lucide-react';

const FilterBar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter</span>
          </button>
          
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <ArrowUp className="w-4 h-4" />
            <ArrowDown className="w-4 h-4" />
            <span className="text-sm font-medium">Sort</span>
          </button>
        </div>
        
        <div className="text-sm text-gray-600">
          Showing results
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
