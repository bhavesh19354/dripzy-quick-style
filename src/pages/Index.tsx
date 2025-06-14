
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';
import CategorySelector from '../components/CategorySelector';
import BannerCarousel from '../components/BannerCarousel';
import ProductGrid from '../components/ProductGrid';
import { categories, banners, products, quickPicks, trendingProducts, justInProducts } from '../data/mockData';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  originalPrice?: number;
}

const Index: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('women');
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    console.log('Added to cart:', product);
  };

  const currentBanner = banners[selectedCategory as keyof typeof banners];
  const currentProducts = products[selectedCategory as keyof typeof products];

  return (
    <Layout cartItemCount={cartItems.length}>
      <div className="bg-gray-50 min-h-screen">
        <SearchBar />
        
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <BannerCarousel
          category={selectedCategory}
          title={currentBanner.title}
          subtitle={currentBanner.subtitle}
          image={currentBanner.image}
        />
        
        <div className="bg-white">
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
