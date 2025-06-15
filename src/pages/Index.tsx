
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import CategorySelector from '../components/CategorySelector';
import YellowBanner from '../components/YellowBanner';
import AutoSlidingBanner from '../components/AutoSlidingBanner';
import MovingBanner from '../components/MovingBanner';
import FeaturedCategories from '../components/FeaturedCategories';
import EthnicCollection from '../components/EthnicCollection';
import ProductGrid from '../components/ProductGrid';
import { MapPin, ChevronDown, User, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { categories, banners, products, featuredCategories, heroImages } from '../data/mockData';
import type { Product } from '../data/productData';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  originalPrice?: number;
  selectedSize?: string;
  quantity: number;
}

// Convert mock data products to match Product interface
const convertToProduct = (mockProduct: any, index: number): Product => ({
  id: index + 1,
  images: [mockProduct.image],
  colorVariants: [
    {
      color: "Default",
      image: mockProduct.image
    }
  ],
  brandName: mockProduct.brand,
  productName: mockProduct.name,
  mrp: mockProduct.originalPrice || mockProduct.price,
  discountedPrice: mockProduct.price
});

// Convert mock data for quick picks and trending
const quickPicks: Product[] = [
  {
    id: 101,
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop'],
    colorVariants: [{ color: "White", image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop' }],
    brandName: 'H&M',
    productName: 'Basic White Tee',
    mrp: 899,
    discountedPrice: 599
  },
  {
    id: 102,
    images: ['https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop'],
    colorVariants: [{ color: "Blue", image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop' }],
    brandName: 'Zara',
    productName: 'Blue Denim Jacket',
    mrp: 2999,
    discountedPrice: 1999
  },
  {
    id: 103,
    images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop'],
    colorVariants: [{ color: "Black", image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop' }],
    brandName: 'Jockey',
    productName: 'Black Casual Shoes',
    mrp: 3499,
    discountedPrice: 2499
  },
  {
    id: 104,
    images: ['https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=300&h=400&fit=crop'],
    colorVariants: [{ color: "Navy", image: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=300&h=400&fit=crop' }],
    brandName: 'H&M',
    productName: 'Cotton Polo Shirt',
    mrp: 1799,
    discountedPrice: 1299
  }
];

const trendingProducts: Product[] = [
  {
    id: 201,
    images: ['https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop'],
    colorVariants: [{ color: "Gray", image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop' }],
    brandName: 'Zara',
    productName: 'Oversized Hoodie',
    mrp: 2599,
    discountedPrice: 1799
  },
  {
    id: 202,
    images: ['https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop'],
    colorVariants: [{ color: "Blue", image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop' }],
    brandName: 'H&M',
    productName: 'High-Waist Jeans',
    mrp: 2999,
    discountedPrice: 2199
  },
  {
    id: 203,
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop'],
    colorVariants: [{ color: "White", image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop' }],
    brandName: 'Jockey',
    productName: 'Sneaker Collection',
    mrp: 4999,
    discountedPrice: 3499
  },
  {
    id: 204,
    images: ['https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop'],
    colorVariants: [{ color: "Floral", image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop' }],
    brandName: 'Zara',
    productName: 'Floral Summer Dress',
    mrp: 2299,
    discountedPrice: 1599
  }
];

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('women');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isSearchSticky, setIsSearchSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the delivery bar height (approximately 72px based on the padding and content)
      const deliveryBarHeight = 72;
      setIsSearchSticky(window.scrollY >= deliveryBarHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id.toString());
    if (existingItem) {
      setCartItems(cartItems.map(item => item.id === product.id.toString() ? {
        ...item,
        quantity: item.quantity + 1
      } : item));
    } else {
      const newCartItem: CartItem = {
        id: product.id.toString(),
        name: product.productName,
        price: product.discountedPrice,
        image: product.images[0],
        brand: product.brandName,
        originalPrice: product.mrp,
        selectedSize: 'M',
        quantity: 1
      };
      setCartItems([...cartItems, newCartItem]);
    }
    console.log('Added to cart:', product);
  };

  const handleUpdateCartQuantity = (id: string, quantity: number) => {
    setCartItems(cartItems.map(item => item.id === id ? {
      ...item,
      quantity
    } : item));
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const currentBanners = banners[selectedCategory as keyof typeof banners];
  const currentProducts = products[selectedCategory as keyof typeof products];
  const currentFeaturedCategories = featuredCategories[selectedCategory as keyof typeof featuredCategories];
  const currentHeroImages = heroImages[selectedCategory as keyof typeof heroImages];

  return (
    <Layout cartItems={cartItems} onUpdateCartQuantity={handleUpdateCartQuantity} onRemoveCartItem={handleRemoveCartItem}>
      <div className="bg-white min-h-screen">
        {/* Hero Section - Background image with overlay content */}
        <div className="relative" style={{
          height: '55vh',
          backgroundImage: 'url(/lovable-uploads/3d5567e9-bee1-49b1-846c-a831ff5e4325.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          {/* Top Bar Content Over Background */}
          <div className="absolute top-0 left-0 right-0 z-10 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-black" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 py-0">
                    <span className="text-zinc-950 text-lg font-bold">Home</span>
                    <ChevronDown className="w-4 h-4 text-black" />
                  </div>
                  <span className="opacity-90 text-zinc-950 font-semibold text-xs">Flat 103, house 288, Medicity, Islam...</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => navigate('/products')}
                  className="text-black hover:text-gray-700 font-medium text-sm"
                >
                  Shop All
                </button>
                <button 
                  onClick={() => navigate('/cart')}
                  className="relative"
                >
                  <ShoppingCart className="w-5 h-5 text-black" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                </button>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">B</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar - Moved up slightly */}
          <div className={`absolute top-16 left-0 right-0 z-10 ${isSearchSticky ? 'invisible' : 'visible'}`}>
            <SearchBar />
          </div>
        </div>

        {/* Sticky Search Bar */}
        <div className={`fixed top-0 left-0 right-0 z-50 bg-black shadow-md transition-transform duration-300 ${isSearchSticky ? 'translate-y-0' : '-translate-y-full'}`}>
          <SearchBar />
        </div>

        {/* Scrollable Content - No gap, attached to background */}
        <div className="bg-gray-50">
          {/* Yellow Banner */}
          <YellowBanner />
          
          <CategorySelector categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          
          <div className="pt-3">
            <AutoSlidingBanner banners={currentBanners} />
          </div>
          
          <div className="my-4">
            <MovingBanner text="FLAT 10% OFF ON YOUR FIRST ORDER" />
          </div>
          
          <div className="bg-white">
            <FeaturedCategories categories={currentFeaturedCategories} />
            
            <EthnicCollection />
            
            <ProductGrid 
              title="Quick Picks" 
              products={quickPicks} 
              onAddToCart={handleAddToCart} 
              heroLayout={true}
              heroImage={currentHeroImages?.quickPicks?.image || "/lovable-uploads/ecaaf61b-2105-4c36-8464-0d14580e5913.png"}
              heroTitle={currentHeroImages?.quickPicks?.title || "SEASON'S STANDOUT"}
            />
            
            <ProductGrid 
              title="Trending Now" 
              products={trendingProducts} 
              onAddToCart={handleAddToCart} 
              heroLayout={true}
              heroImage={currentHeroImages?.trending?.image || "/lovable-uploads/ed93d5d3-7dfc-435d-b618-f1ec8b6380b5.png"}
              heroTitle={currentHeroImages?.trending?.title || "Products you can't miss"}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
