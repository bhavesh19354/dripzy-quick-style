
import React from 'react';
import { Zap, Eye, RotateCcw } from 'lucide-react';

const YellowBanner: React.FC = () => {
  return (
    <div className="bg-yellow-400 px-4 py-3">
      <div className="flex items-center justify-between gap-2">
        {/* Lightning-Fast Delivery */}
        <div className="flex items-center gap-2 flex-1">
          <Zap className="w-4 h-4 text-black flex-shrink-0" />
          <span className="text-black text-xs font-semibold">Lightning-Fast Delivery</span>
        </div>
        
        {/* Try Before You Buy */}
        <div className="flex items-center gap-2 flex-1 justify-center">
          <Eye className="w-4 h-4 text-black flex-shrink-0" />
          <span className="text-black text-xs font-semibold">Try Before You Buy</span>
        </div>
        
        {/* On the spot Returns */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          <RotateCcw className="w-4 h-4 text-black flex-shrink-0" />
          <span className="text-black text-xs font-semibold">On the spot Returns</span>
        </div>
      </div>
    </div>
  );
};

export default YellowBanner;
