
import React from 'react';
import ProductCard from './ProductCard';
import { Skeleton } from './ui/skeleton';
import type { Product } from '../data/productData';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  className?: string;
  title?: string;
  onAddToCart?: (product: Product) => void;
  heroLayout?: boolean;
  heroImage?: string;
  heroTitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  loading = false, 
  className = "",
  title,
  onAddToCart,
  heroLayout = false,
  heroImage,
  heroTitle
}) => {
  if (loading) {
    return (
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden">
            <Skeleton className="aspect-[3/4] w-full" />
            <div className="p-3 space-y-2">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2M4 13h2m-2 0v-2a2 2 0 012-2h2m0 0V6a2 2 0 012-2h2m0 0V4a2 2 0 012-2h2" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">No products found</h3>
        <p className="text-gray-500">Try adjusting your filters or search criteria</p>
      </div>
    );
  }

  return (
    <div className="py-6">
      {title && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        </div>
      )}
      
      {heroLayout && heroImage && (
        <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
          <img 
            src={heroImage} 
            alt={heroTitle || title || "Hero"} 
            className="w-full h-full object-cover"
          />
          {heroTitle && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold">{heroTitle}</h3>
            </div>
          )}
        </div>
      )}
      
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
