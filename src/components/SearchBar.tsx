
import React from 'react';
import { Search, Mic } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const SearchBar: React.FC = () => {
  return (
    <div className="bg-transparent px-4 py-3">
      <div className="flex items-center gap-3">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search 'chicken'"
            className="w-full pl-10 pr-12 py-3 bg-gray-800 text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <Mic className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        
        {/* VEG MODE Toggle */}
        <div className="flex flex-col items-center">
          <span className="text-xs font-medium text-gray-700 mb-1">VEG</span>
          <span className="text-xs font-medium text-gray-700 mb-1">MODE</span>
          <Switch className="scale-75" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
