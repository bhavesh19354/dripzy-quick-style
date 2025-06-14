
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import CategorySelector from '../components/CategorySelector';
import AutoSlidingBanner from '../components/AutoSlidingBanner';
import MovingBanner from '../components/MovingBanner';
import FeaturedCategories from '../components/FeaturedCategories';
import EthnicCollection from '../components/EthnicCollection';
import ProductGrid from '../components/ProductGrid';
import { MapPin, ChevronDown, User, Bell } from 'lucide-react';
import { categories, banners, products, quickPicks, trendingProducts, justInProducts, featuredCategories } from '../data/mockData';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  originalPrice?: number;
}

interface CartItem extends Product {
  selectedSize?: string;
  quantity: number;
}

const Index: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('women');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isSearchSticky, setIsSearchSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.55;
      setIsSearchSticky(window.scrollY > heroHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      const newCartItem: CartItem = {
        ...product,
        selectedSize: 'M',
        quantity: 1
      };
      setCartItems([...cartItems, newCartItem]);
    }
    
    console.log('Added to cart:', product);
  };

  const handleUpdateCartQuantity = (id: string, quantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const currentBanners = banners[selectedCategory as keyof typeof banners];
  const currentProducts = products[selectedCategory as keyof typeof products];
  const currentFeaturedCategories = featuredCategories[selectedCategory as keyof typeof featuredCategories];

  return (
    <Layout 
      cartItems={cartItems}
      onUpdateCartQuantity={handleUpdateCartQuantity}
      onRemoveCartItem={handleRemoveCartItem}
    >
      <div className="bg-white min-h-screen">
        {/* Hero Section - Top 55% */}
        <div 
          className="relative bg-gradient-to-b from-pink-200 to-pink-300"
          style={{ 
            height: '55vh',
            backgroundImage: 'url(/lovable-uploads/5760c5aa-e1a9-4964-9b6f-8d7fa5bbfa03.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Top Address Bar */}
          <div className="px-4 py-3 bg-white/90 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gray-700 mt-1" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-gray-900">Home</span>
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="text-sm text-gray-600">288, Sector 38, Medicity...</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Bell className="w-6 h-6 text-gray-700" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar - Normal Position */}
          <div className={isSearchSticky ? 'invisible' : 'visible'}>
            <SearchBar />
          </div>

          {/* Father's Day Banner */}
          <div className="px-4 mt-4">
            <div className="relative bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-6 overflow-hidden">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                    FATHER'S DAY
                  </h2>
                  <h3 className="text-3xl font-bold text-yellow-200" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                    SPECIALS
                  </h3>
                </div>
                
                {/* Collaboration Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2">
                  <span className="text-xs text-gray-600">in collaboration with</span>
                  <div className="bg-black text-white px-2 py-1 rounded text-sm font-bold">
                    CAKEZONE
                  </div>
                </div>
              </div>
              
              {/* Illustration Area */}
              <div className="absolute bottom-0 right-0 w-32 h-24 bg-gradient-to-t from-orange-600 to-transparent rounded-tl-full">
                <div className="absolute bottom-2 right-8 text-4xl">🎵</div>
                <div className="absolute bottom-4 right-16 text-2xl">👨‍👧</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Search Bar */}
        <div className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${
          isSearchSticky ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <SearchBar />
        </div>

        {/* Scrollable Content */}
        <div className="bg-gray-50 pt-4">
          <CategorySelector
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
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
            />
            
            <ProductGrid
              title="Trending Now"
              products={trendingProducts}
              onAddToCart={handleAddToCart}
            />
            
            <ProductGrid
              title="Just In"
              products={justInProducts}
              onAddToCart={handleAddToCart}
            />
            
            <ProductGrid
              title={`${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Collection`}
              products={currentProducts}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
