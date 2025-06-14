
import React from 'react';

interface ProductInfoProps {
  brandName: string;
  productName: string;
  mrp: number;
  discountedPrice: number;
  className?: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ 
  brandName, 
  productName, 
  mrp, 
  discountedPrice, 
  className = "" 
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const hasDiscount = discountedPrice < mrp;
  const discountPercentage = hasDiscount ? Math.round(((mrp - discountedPrice) / mrp) * 100) : 0;

  return (
    <div className={`p-3 space-y-1 ${className}`}>
      {/* Brand Name */}
      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
        {brandName}
      </p>
      
      {/* Product Name */}
      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-tight">
        {productName}
      </h3>
      
      {/* Pricing */}
      <div className="flex items-center space-x-2 pt-1">
        <span className="text-sm font-bold text-gray-900">
          {formatPrice(discountedPrice)}
        </span>
        
        {hasDiscount && (
          <>
            <span className="text-xs text-gray-500 line-through">
              {formatPrice(mrp)}
            </span>
            <span className="text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
              {discountPercentage}% OFF
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
