
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { ArrowLeft, Heart, Share2, Star } from 'lucide-react';
import { products } from '../data/mockData';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  originalPrice?: number;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find product from all categories
  const allProducts = [
    ...products.women,
    ...products.men,
    ...products.footwear,
    ...products.accessories
  ];
  
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <Layout cartItemCount={cartItems.length}>
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-500">Product not found</p>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    const cartItem = { ...product, selectedSize, quantity };
    setCartItems([...cartItems, cartItem]);
    console.log('Added to cart:', cartItem);
  };

  const images = [product.image, product.image, product.image]; // Mock multiple images
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <Layout cartItemCount={cartItems.length}>
      <div className="bg-white min-h-screen">
        {/* Header */}
        <div className="sticky top-16 bg-white border-b border-gray-200 px-4 py-3 z-10">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Images */}
        <div className="relative">
          <div className="aspect-square bg-gray-100">
            <img
              src={images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-4">
            <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
            <h1 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.5</span>
              </div>
              <span className="text-sm text-gray-500">(127 reviews)</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
              )}
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-6">
            <p className="text-sm font-medium text-orange-800">
              🚚 Get it delivered in 30 minutes
            </p>
            <p className="text-xs text-orange-600 mt-1">
              Free delivery on orders above ₹499
            </p>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Size</h3>
            <div className="flex gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg font-medium ${
                    selectedSize === size
                      ? 'border-orange-500 bg-orange-50 text-orange-700'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Quantity</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
              >
                -
              </button>
              <span className="font-medium text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-3">Description</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Premium quality {product.name.toLowerCase()} from {product.brand}. 
              Made with high-quality materials for comfort and durability. 
              Perfect for casual and formal occasions.
            </p>
          </div>
        </div>

        {/* Fixed Bottom CTA */}
        <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <button
            onClick={handleAddToCart}
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            Add to Cart • ₹{product.price * quantity}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
