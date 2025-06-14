
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

interface WishlistButtonProps {
  productId: number;
  className?: string;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ productId, className = "" }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card navigation
    setIsWishlisted(!isWishlisted);
    console.log(`Product ${productId} ${isWishlisted ? 'removed from' : 'added to'} wishlist`);
  };

  return (
    <button
      onClick={handleClick}
      className={`absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:bg-white/90 ${className}`}
      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart 
        className={`w-4 h-4 transition-colors duration-200 ${
          isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
        }`} 
      />
    </button>
  );
};

export default WishlistButton;
