
import React from 'react';

interface BannerDotsProps {
  totalBanners: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

const BannerDots: React.FC<BannerDotsProps> = ({ 
  totalBanners, 
  currentIndex, 
  onDotClick 
}) => {
  if (totalBanners <= 1) return null;

  return (
    <div className="flex justify-center gap-2 mb-4">
      {Array.from({ length: totalBanners }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2 h-2 rounded-full transition-all ${
            index === currentIndex ? 'bg-orange-400' : 'bg-gray-400'
          }`}
        />
      ))}
    </div>
  );
};

export default BannerDots;
