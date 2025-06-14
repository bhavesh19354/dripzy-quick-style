
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Banner {
  title: string;
  subtitle: string;
  image: string;
}

interface AutoSlidingBannerProps {
  banners: Banner[];
  autoSlideInterval?: number;
}

const AutoSlidingBanner: React.FC<AutoSlidingBannerProps> = ({ 
  banners, 
  autoSlideInterval = 4000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [banners.length, autoSlideInterval]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? banners.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === banners.length - 1 ? 0 : currentIndex + 1);
  };

  if (!banners.length) return null;

  const currentBanner = banners[currentIndex];

  return (
    <div className="relative mx-4 mb-2 rounded-2xl overflow-hidden h-80 bg-gradient-to-r from-gray-900 to-gray-700">
      <img
        src={currentBanner.image}
        alt="Banner"
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Navigation arrows */}
      {banners.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Content */}
      <div className="absolute bottom-12 left-0 p-6 text-white">
        <p className="text-orange-400 text-sm font-medium mb-1">SHOP ABOVE ₹500 TO UNLOCK A FREE PASS!</p>
        <h2 className="text-2xl font-bold mb-1">{currentBanner.title}</h2>
        <p className="text-sm opacity-90">{currentBanner.subtitle}</p>
      </div>

      {/* Dots indicator - positioned at the bottom center outside the banner */}
      {banners.length > 1 && (
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-orange-400' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoSlidingBanner;
