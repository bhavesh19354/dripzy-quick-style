import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, cart, share } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';
import { Button } from '../components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface Store {
  primary_key: {
    store_id: number;
  };
  image_urls: string;
  name: string;
  address: {
    full_address: string;
    latitude: number;
    longitude: number;
    postal_code: string;
    city: string;
  };
  distance_in_meters: number;
  time_in_millis: number;
}

interface Size {
  size_id: number;
  size_name: string;
  product_variant_id: number;
  product_variant_name: string;
  product_variant_description: string;
  mrp_micros: number;
  store_with_best_price: Store;
  discounted_price_mircos: number;
  quantity: number;
}

interface ColorVariant {
  color_id: number;
  color_name: string;
  product_image_urls: string[];
  sizes: Size[];
}

interface ProductDetail {
  product_id: number;
  colors: ColorVariant[];
}

interface ApiResponse {
  product_details: ProductDetail;
}

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [sizeValidationShake, setSizeValidationShake] = useState(false);

  useEffect(() => {
    const fetchProductDetail = () => {
      setIsLoading(true);
      console.log('Loading product detail for ID:', productId);
      
      // Simulate API delay
      setTimeout(() => {
        // Create mock data based on the product ID
        const pid = parseInt(productId || '0');
        
        // Default mock data structure that works for any product ID
        const mockApiResponse: ApiResponse = {
          product_details: {
            product_id: pid,
            colors: [
              {
                color_id: 1,
                color_name: "Default",
                product_image_urls: [
                  "https://image.hm.com/assets/hm/11/1b/111bb98f69b415b80383abaf66ed9cd8250e6023.jpg",
                  "https://image.hm.com/assets/hm/4c/ee/4cee8433280e22e92312d7140844c8041d3aeaa0.jpg",
                  "https://image.hm.com/assets/hm/06/53/06531fe897c6bdbdfb92274ac4a8672f187662f3.jpg"
                ],
                sizes: [
                  {
                    size_id: 1,
                    size_name: "XS",
                    product_variant_id: 1,
                    product_variant_name: "H&M Product",
                    product_variant_description: "A stylish H&M product with great quality and comfort.",
                    mrp_micros: 799000000,
                    store_with_best_price: {
                      primary_key: { store_id: 1 },
                      image_urls: "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000,format=auto/m/2b4d/aadb/ced2/d0f6/7681/b92b/eee3/106b/3465/0a10/0a10.jpg",
                      name: "H&M Store",
                      address: {
                        full_address: "H&M Store Location",
                        latitude: 28.634170532226562,
                        longitude: 77.21920013427734,
                        postal_code: "110001",
                        city: "New Delhi"
                      },
                      distance_in_meters: 33486,
                      time_in_millis: 3281000
                    },
                    discounted_price_mircos: 799000000,
                    quantity: 1000
                  },
                  {
                    size_id: 2,
                    size_name: "S",
                    product_variant_id: 2,
                    product_variant_name: "H&M Product",
                    product_variant_description: "A stylish H&M product with great quality and comfort.",
                    mrp_micros: 799000000,
                    store_with_best_price: {
                      primary_key: { store_id: 1 },
                      image_urls: "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000,format=auto/m/2b4d/aadb/ced2/d0f6/7681/b92b/eee3/106b/3465/0a10/0a10.jpg",
                      name: "H&M Store",
                      address: {
                        full_address: "H&M Store Location",
                        latitude: 28.634170532226562,
                        longitude: 77.21920013427734,
                        postal_code: "110001",
                        city: "New Delhi"
                      },
                      distance_in_meters: 33486,
                      time_in_millis: 3281000
                    },
                    discounted_price_mircos: 799000000,
                    quantity: 1000
                  },
                  {
                    size_id: 3,
                    size_name: "M",
                    product_variant_id: 3,
                    product_variant_name: "H&M Product",
                    product_variant_description: "A stylish H&M product with great quality and comfort.",
                    mrp_micros: 799000000,
                    store_with_best_price: {
                      primary_key: { store_id: 1 },
                      image_urls: "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000,format=auto/m/2b4d/aadb/ced2/d0f6/7681/b92b/eee3/106b/3465/0a10/0a10.jpg",
                      name: "H&M Store",
                      address: {
                        full_address: "H&M Store Location",
                        latitude: 28.634170532226562,
                        longitude: 77.21920013427734,
                        postal_code: "110001",
                        city: "New Delhi"
                      },
                      distance_in_meters: 33486,
                      time_in_millis: 3281000
                    },
                    discounted_price_mircos: 799000000,
                    quantity: 1000
                  }
                ]
              }
            ]
          }
        };
        
        // If it's the specific product ID 36, use the detailed mock data
        if (pid === 36) {
          mockApiResponse.product_details = {
            product_id: 36,
            colors: [
              {
                color_id: 35,
                color_name: "Dusty pink",
                product_image_urls: [
                  "https://image.hm.com/assets/hm/11/1b/111bb98f69b415b80383abaf66ed9cd8250e6023.jpg",
                  "https://image.hm.com/assets/hm/4c/ee/4cee8433280e22e92312d7140844c8041d3aeaa0.jpg",
                  "https://image.hm.com/assets/hm/06/53/06531fe897c6bdbdfb92274ac4a8672f187662f3.jpg",
                  "https://image.hm.com/assets/hm/8a/9b/8a9bba55bc6a49ab71da52560818e51df319e831.jpg",
                  "https://image.hm.com/assets/hm/18/9e/189ed1a39b1bde429686e1c71317da47a947e9c2.jpg"
                ],
                sizes: [
                  {
                    size_id: 165,
                    size_name: "XS",
                    product_variant_id: 165,
                    product_variant_name: "Lace-trimmed ribbed T-shirt",
                    product_variant_description: "Short, fitted T-shirt in narrow-ribbed viscose jersey with a narrow trim around the neckline and a delicate lace trim at the cuffs.",
                    mrp_micros: 799000000,
                    store_with_best_price: {
                      primary_key: { store_id: 8 },
                      image_urls: "https://media.fashionnetwork.com/cdn-cgi/image/fit=contain,width=1000,height=1000,format=auto/m/2b4d/aadb/ced2/d0f6/7681/b92b/eee3/106b/3465/0a10/0a10.jpg",
                      name: "H&M The Connaught High Street",
                      address: {
                        full_address: "The Connaught High Street Inner Circle, B Block, Connaught Place",
                        latitude: 28.634170532226562,
                        longitude: 77.21920013427734,
                        postal_code: "110001",
                        city: "New Delhi"
                      },
                      distance_in_meters: 33486,
                      time_in_millis: 3281000
                    },
                    discounted_price_mircos: 799000000,
                    quantity: 1000
                  },
                  {
                    size_id: 168,
                    size_name: "L",
                    product_variant_id: 168,
                    product_variant_name: "Lace-trimmed ribbed T-shirt",
                    product_variant_description: "Short, fitted T-shirt in narrow-ribbed viscose jersey with a narrow trim around the neckline and a delicate lace trim at the cuffs.",
                    mrp_micros: 799000000,
                    store_with_best_price: {
                      primary_key: { store_id: 24 },
                      image_urls: "https://lh3.googleusercontent.com/JKPieJTXhsjXTR2Bf7tIN0gfCY0uq4T9fAd2QnmrScTbpqcXSLYBAlS73loQDRF52FZ8kqlhfm-BdmYDPgeWH0R9j_ha=w1200-rw",
                      name: "H&M Grand Venice",
                      address: {
                        full_address: "Plot No SH3, Site IV, Near Pari Chowk, Greater Noida",
                        latitude: 28.452878952026367,
                        longitude: 77.52599334716797,
                        postal_code: "201308",
                        city: "Noida"
                      },
                      distance_in_meters: 68492,
                      time_in_millis: 5628000
                    },
                    discounted_price_mircos: 799000000,
                    quantity: 1000
                  }
                ]
              }
            ]
          };
        }
        
        setProduct(mockApiResponse.product_details);
        setIsLoading(false);
        console.log('Product detail loaded successfully for ID:', pid);
      }, 800);
    };
    
    if (productId) {
      fetchProductDetail();
    }
  }, [productId]);
  
  const handleColorChange = (index: number) => {
    setSelectedColorIndex(index);
    setSelectedSize(''); // Reset size selection when color changes
  };
  
  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
    // Clear any validation shake animation
    setSizeValidationShake(false);
  };
  
  const handleBack = () => {
    // Always navigate to the Product Listing page
    navigate('/products');
  };
  
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.colors[selectedColorIndex]?.sizes[0]?.product_variant_name,
        text: `Check out this H&M product`,
        url: window.location.href,
      });
    } else {
      // Improved fallback: copy to clipboard & show toast
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied!",
        description: "Product link copied to clipboard.",
      });
      console.log('Product URL copied to clipboard');
    }
  };
  
  const handleAddToBag = () => {
    if (!selectedSize) {
      // Trigger shake animation for size selection
      setSizeValidationShake(true);
      
      // Show toast notification
      toast({
        title: "Size Required",
        description: "Please select a size before adding to bag",
        variant: "destructive",
      });
      
      // Remove shake animation after animation completes
      setTimeout(() => setSizeValidationShake(false), 600);
      return;
    }
    
    // Add to bag logic here
    const selectedSizeData = availableSizes.find(size => size.size_name === selectedSize);
    toast({
      title: "Added to Bag",
      description: `${selectedSizeData?.product_variant_name} (Size: ${selectedSize}) added to your bag`,
    });
    
    console.log('Adding to bag:', {
      productId: product?.product_id,
      colorId: product?.colors[selectedColorIndex]?.color_id,
      size: selectedSize,
      sizeData: selectedSizeData
    });
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }
  
  if (!product || !product.colors || product.colors.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Product not found</p>
          <Button onClick={handleBack} variant="outline">
            Go Back
          </Button>
        </div>
      </div>
    );
  }
  
  const currentColor = product.colors[selectedColorIndex];
  const currentImages = currentColor?.product_image_urls || [];
  const availableSizes = currentColor?.sizes || [];
  
  // Get the first size for price display, or selected size details
  const selectedSizeData = selectedSize 
    ? availableSizes.find(size => size.size_name === selectedSize)
    : availableSizes[0];
  
  // Convert micros to regular price (divide by 1,000,000)
  const mrp = selectedSizeData ? selectedSizeData.mrp_micros / 1000000 : 0;
  const discountedPrice = selectedSizeData ? selectedSizeData.discounted_price_mircos / 1000000 : 0;
  
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b">
        <button
          onClick={handleBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-lg font-medium">Product Detail</h1>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => navigate('/cart')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Go to cart"
          >
            {React.createElement(cart, { size: 20 })}
          </button>
        </div>
      </header>
  
      {/* Product Image Carousel with auto-scroll enabled */}
      <div className="relative">
        <ImageCarousel images={currentImages} autoPlay={true} />
        
        {/* Floating Action Buttons */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-3">
          <button
            onClick={toggleWishlist}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart 
              size={20} 
              className={isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'} 
            />
          </button>
          <button
            onClick={handleShare}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            aria-label="Share product"
          >
            {React.createElement(share, { size: 20, className: "text-gray-600" })}
          </button>
        </div>
      </div>
  
      {/* Product Information */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          H&M
        </h2>
        
        <p className="text-gray-600 text-sm mb-4">
          {selectedSizeData?.product_variant_name || 'Product'}
        </p>
  
        {selectedSizeData?.product_variant_description && (
          <div 
            className="text-gray-600 text-sm mb-4"
            dangerouslySetInnerHTML={{ __html: selectedSizeData.product_variant_description }}
          />
        )}
  
        {/* Color Variants */}
        {product.colors.length > 0 && (
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Colors Available</h3>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide p-1">
              {product.colors.map((color, index) => (
                <div
                  key={color.color_id}
                  className="text-center cursor-pointer flex-shrink-0"
                  onClick={() => handleColorChange(index)}
                >
                  <div className={`w-14 h-18 rounded-lg overflow-hidden border-2 mb-2 transition-all duration-200 ${
                    selectedColorIndex === index ? 'border-black scale-105' : 'border-gray-200 hover:border-gray-400'
                  }`}>
                    <img
                      src={color.product_image_urls[0]}
                      alt={color.color_name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs text-gray-600 max-w-14 truncate">
                    {color.color_name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
  
        {/* Size Selection */}
        {availableSizes.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              {!selectedSize && (
                <span className="text-xs text-orange-600 animate-pulse">
                  Please select a size
                </span>
              )}
            </div>
            <div className={`flex gap-3 overflow-x-auto scrollbar-hide p-1 transition-all duration-300 ${
              sizeValidationShake ? 'animate-bounce' : ''
            }`}>
              {availableSizes.map((size) => (
                <button
                  key={size.size_id}
                  onClick={() => handleSizeChange(size.size_name)}
                  className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center text-sm font-medium transition-all duration-200 flex-shrink-0 ${
                    selectedSize === size.size_name 
                      ? 'border-black bg-black text-white scale-105' 
                      : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400 hover:scale-105'
                  }`}
                >
                  {size.size_name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
  
      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-lg font-bold text-gray-900">
              ₹{discountedPrice || mrp}
            </span>
            {discountedPrice && discountedPrice < mrp && (
              <span className="text-sm text-gray-500 line-through">
                ₹{mrp}
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500">(Incl. Of All Taxes)</p>
        </div>
        <Button 
          onClick={handleAddToBag}
          className={`px-8 py-3 text-base font-medium transition-all duration-200 ${
            selectedSize 
              ? 'bg-black text-white hover:bg-gray-800 hover:scale-105' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300'
          }`}
          size="lg"
        >
          ADD TO BAG
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
