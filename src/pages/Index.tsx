
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
      // Get the delivery bar height (approximately 72px based on the padding and content)
      const deliveryBarHeight = 72;
      setIsSearchSticky(window.scrollY >= deliveryBarHeight);
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
        {/* Hero Section - Full Height with Overlay Content */}
        <div 
          className="relative"
          style={{ 
            height: '55vh',
            backgroundImage: 'url(/lovable-uploads/e741bfa9-a41f-4e72-8805-08ff897f359f.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Top Bar Content Over Background */}
          <div className="absolute top-0 left-0 right-0 z-10 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-pink-500 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs text-gray-300">Delivery in</span>
                  <span className="text-sm font-medium text-white">Gurgaon</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Bell className="w-5 h-5 text-white" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Search Bar - Normal Position */}
          <div className={`absolute top-16 left-0 right-0 z-10 ${isSearchSticky ? 'invisible' : 'visible'}`}>
            <SearchBar />
          </div>
        </div>

        {/* Sticky Search Bar */}
        <div className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${
          isSearchSticky ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <SearchBar />
        </div>

        {/* Add padding when search is sticky to prevent content jump */}
        <div className={`transition-all duration-300 ${isSearchSticky ? 'pt-20' : 'pt-0'}`}>
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
      </div>
    </Layout>
  );
};

export default Index;
