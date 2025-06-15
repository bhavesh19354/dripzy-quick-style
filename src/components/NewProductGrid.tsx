
import React from 'react';
import { Heart, Plus } from 'lucide-react';
import { Product } from '../types/product';

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
}

const NewProductGrid: React.FC<ProductGridProps> = ({ products, isLoading }) => {
  if (isLoading) {
    return (
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-3">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group cursor-pointer overflow-hidden">
            <div className="relative">
              <img
                src={product.images[0]}
                alt={product.productName}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Heart Icon - Top Right */}
              <button
                onClick={(e) => e.stopPropagation()}
                className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-2 shadow-sm hover:bg-opacity-100 transition-all"
              >
                <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
              </button>
              
              {/* Add to Cart Button */}
              <button
                onClick={(e) => e.stopPropagation()}
                className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-50"
              >
                <Plus className="w-4 h-4 text-orange-500" />
              </button>
            </div>
            
            <div className="p-3">
              <p className="text-xs text-gray-500 mb-1 truncate">{product.brandName}</p>
              <h3 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2 leading-tight h-10 overflow-hidden">
                {product.productName}
              </h3>
              
              {/* Color variants */}
              <div className="flex gap-1 mb-2">
                {product.colorVariants.slice(0, 4).map((variant, index) => (
                  <div key={index} className="w-4 h-4 rounded-full border border-gray-200 overflow-hidden">
                    <img src={variant.image} alt={variant.color} className="w-full h-full object-cover" />
                  </div>
                ))}
                {product.colorVariants.length > 4 && (
                  <span className="text-xs text-gray-500">+{product.colorVariants.length - 4}</span>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900 text-sm">₹{product.discountedPrice}</span>
                {product.mrp !== product.discountedPrice && (
                  <span className="text-xs text-gray-500 line-through">₹{product.mrp}</span>
                )}
                {product.mrp !== product.discountedPrice && (
                  <span className="text-xs text-green-600 font-medium">
                    {Math.round(((product.mrp - product.discountedPrice) / product.mrp) * 100)}% off
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {products.length === 0 && !isLoading && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default NewProductGrid;
