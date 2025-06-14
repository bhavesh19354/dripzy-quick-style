
import React from 'react';
import { Plus, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  originalPrice?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onClick?: (productId: string) => void;
  showHeartIcon?: boolean;
  itemNumber?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  onClick, 
  showHeartIcon = false,
  itemNumber
}) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleCardClick = () => {
    if (onClick) {
      onClick(product.id);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking add to cart
    
    if (!isAuthenticated) {
      navigate('/auth', { state: { from: window.location.pathname } });
      return;
    }
    
    onAddToCart(product);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group cursor-pointer flex flex-col"
      onClick={handleCardClick}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
            showHeartIcon ? 'h-24 md:h-32' : 'h-32 md:h-48'
          }`}
        />
        
        {/* Heart Icon - Top Right */}
        {showHeartIcon && (
          <button
            onClick={(e) => e.stopPropagation()}
            className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 shadow-sm hover:bg-opacity-100 transition-all"
          >
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>
        )}
        
        {/* Item Number - Bottom Left */}
        {itemNumber && (
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {itemNumber}
          </div>
        )}

        {/* Delivery Time Badge - Top Left (only for non-hero layout) */}
        {!showHeartIcon && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            30 min
          </div>
        )}
        
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-50"
        >
          <Plus className="w-4 h-4 text-orange-500" />
        </button>
      </div>
      
      <div className="p-2 flex-1 flex flex-col justify-between min-h-[60px]">
        <div>
          <p className="text-xs text-gray-500 mb-1 truncate">{product.brand}</p>
          <h3 className="font-medium text-gray-900 text-xs mb-1 line-clamp-2 leading-tight h-8 overflow-hidden">{product.name}</h3>
        </div>
        <div className="flex items-center gap-1 mt-auto">
          <span className="font-bold text-gray-900 text-xs">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-xs text-gray-500 line-through">₹{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
