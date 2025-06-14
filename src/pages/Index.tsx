
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import CategorySelector from '../components/CategorySelector';
import AutoSlidingBanner from '../components/AutoSlidingBanner';
import MovingBanner from '../components/MovingBanner';
import FeaturedCategories from '../components/FeaturedCategories';
import ProductGrid from '../components/ProductGrid';
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
      <div className="bg-gray-50 min-h-screen">
        <SearchBar />
        
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
    </Layout>
  );
};

export default Index;
