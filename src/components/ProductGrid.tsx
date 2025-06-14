
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
        {/* Extended Hero Section with reduced mobile height */}
        <div className="relative h-[28rem] md:h-[40rem] mb-6 rounded-2xl overflow-hidden">
          <img
            src="/lovable-uploads/66c2b67b-2949-41db-a05e-9c12ebf23ddb.png"
            alt={heroTitle || title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          
          {/* Overlay Text - Upper Half */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-white font-bold tracking-wider leading-tight">
              <div className="text-3xl md:text-4xl mb-1 font-serif italic">Top</div>
              <div className="text-4xl md:text-5xl mb-1 font-sans font-extrabold">Selling</div>
              <div className="text-3xl md:text-4xl font-serif italic">Products</div>
            </div>
          </div>
          
          {/* Product Cards Overlay - Higher positioning and smaller cards on mobile */}
          <div className="absolute bottom-4 md:bottom-0 left-0 right-0 h-1/3 md:h-1/2 flex items-start md:items-center pt-4 md:pt-0 px-4">
            <div className="flex gap-2 md:gap-3 overflow-x-auto pb-4 scrollbar-hide w-full">
              {products.map((product, index) => (
                <div key={product.id} className="flex-shrink-0 w-32 md:w-48">
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
