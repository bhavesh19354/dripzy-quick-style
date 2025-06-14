
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from './ImageCarousel';
import ProductInfo from './ProductInfo';
import WishlistButton from './WishlistButton';
import type { Product } from '../data/productData';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = "" }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer group ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={`View details for ${product.productName} by ${product.brandName}`}
    >
      {/* Image Section */}
      <div className="relative">
        <ImageCarousel
          images={product.images}
          colorVariants={product.colorVariants}
          productName={product.productName}
        />
        <WishlistButton productId={product.id} />
      </div>

      {/* Product Information */}
      <ProductInfo
        brandName={product.brandName}
        productName={product.productName}
        mrp={product.mrp}
        discountedPrice={product.discountedPrice}
      />
    </div>
  );
};

export default ProductCard;
