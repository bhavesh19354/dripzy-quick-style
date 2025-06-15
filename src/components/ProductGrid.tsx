
import React from 'react';
import ProductCard from './ProductCard';
import { Skeleton } from './ui/skeleton';

interface ColorVariant {
  color: string;
  image: string;
}

interface Product {
  id: number;
  images: string[];
  colorVariants: ColorVariant[];
  brandName: string;
  productName: string;
  mrp: number;
  discountedPrice: number;
}

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <Skeleton className="aspect-[3/4] w-full" />
              <div className="p-3">
                <Skeleton className="h-4 w-16 mb-1" />
                <Skeleton className="h-3 w-32 mb-2" />
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-3 w-12" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
