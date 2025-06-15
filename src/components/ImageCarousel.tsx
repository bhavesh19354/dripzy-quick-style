
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ColorVariant } from '../data/productData';

interface ImageCarouselProps {
  images: string[];
  colorVariants: ColorVariant[];
  productName: string;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  colorVariants, 
  productName, 
  className = "" 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  
  // Ensure images is always an array
  const safeImages = Array.isArray(images) ? images : [];
  const safeColorVariants = Array.isArray(colorVariants) ? colorVariants : [];
  
  // Combine images from main array and color variants
  const allImages = [...safeImages, ...safeColorVariants.map(variant => variant.image)];
  const totalImages = allImages.length;

  // If no images, use a fallback
  if (totalImages === 0) {
    allImages.push("https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop");
  }

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, totalImages - 1) : prevIndex - 1
    );
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.max(0, totalImages - 1) ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const fallbackImage = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop";
  const currentImage = allImages[currentIndex] || fallbackImage;

  return (
    <div className={`relative group aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden ${className}`}>
      {/* Main Image */}
      <img
        src={imageError ? fallbackImage : currentImage}
        alt={`${productName} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        onError={() => setImageError(true)}
        loading="lazy"
      />

      {/* Navigation Arrows - Only show if more than 1 image */}
      {totalImages > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white/90"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white/90"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
        </>
      )}

      {/* Dot Indicators - Only show if more than 1 image */}
      {totalImages > 1 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {allImages.map((_, index) => (
            <button
              key={index}
              onClick={(e) => goToSlide(index, e)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
