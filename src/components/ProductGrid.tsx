import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  originalPrice?: number;
}

interface ProductGridProps {
  title: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
  heroLayout?: boolean;
  heroImage?: string;
  heroTitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  title, 
  products, 
  onAddToCart, 
  heroLayout = false,
  heroImage,
  heroTitle
}) => {
  const navigate = useNavigate();

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  if (heroLayout) {
    return (
      <div className="mb-8">
        {/* Extended Hero Section with double height */}
        <div className="relative h-[32rem] md:h-[40rem] mb-6 rounded-2xl overflow-hidden">
          <img
            src="/lovable-uploads/a13d003d-2389-42d3-a990-f5897b703179.png"
            alt={heroTitle || title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          
          {/* Product Cards Overlay - Positioned to work on all screen sizes */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-center px-4">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide w-full">
              {products.map((product, index) => (
                <div key={product.id} className="flex-shrink-0 w-48">
                  <ProductCard
                    product={product}
                    onAddToCart={onAddToCart}
                    onClick={handleProductClick}
                    showHeartIcon={true}
                    itemNumber={index + 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 mb-8">
      <h2 className="text-lg font-bold text-gray-900 mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onClick={handleProductClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
