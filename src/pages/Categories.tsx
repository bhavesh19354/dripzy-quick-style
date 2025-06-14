
import React, { useState } from 'react';
import Layout from '../components/Layout';
import CategorySelector from '../components/CategorySelector';
import { categories } from '../data/mockData';

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('women');

  const subcategories = {
    women: [
      { name: 'Topwear', icon: '👚', items: ['T-Shirts', 'Shirts', 'Blouses', 'Cardigans', 'Jackets', 'Blazers'] },
      { name: 'Bottomwear', icon: '👖', items: ['Jeans', 'Trousers', 'Skirts', 'Shorts', 'Leggings'] },
      { name: 'Dresses', icon: '👗', items: ['Casual Dresses', 'Party Dresses', 'Maxi Dresses', 'Mini Dresses'] },
      { name: 'Innerwear', icon: '🩱', items: ['Bras', 'Panties', 'Shapewear', 'Sleepwear'] }
    ],
    men: [
      { name: 'Topwear', icon: '👔', items: ['T-Shirts', 'Shirts', 'Polo', 'Hoodies', 'Jackets'] },
      { name: 'Bottomwear', icon: '👖', items: ['Jeans', 'Trousers', 'Chinos', 'Shorts', 'Track Pants'] },
      { name: 'Innerwear', icon: '🩲', items: ['Briefs', 'Boxers', 'Vests', 'Sleepwear'] },
      { name: 'Formal', icon: '🤵', items: ['Suits', 'Blazers', 'Formal Shirts', 'Ties'] }
    ],
    footwear: [
      { name: 'Casual', icon: '👟', items: ['Sneakers', 'Canvas Shoes', 'Loafers', 'Slip-ons'] },
      { name: 'Formal', icon: '👞', items: ['Oxfords', 'Brogues', 'Derby', 'Monk Straps'] },
      { name: 'Sports', icon: '⚽', items: ['Running Shoes', 'Training Shoes', 'Basketball', 'Football'] },
      { name: 'Boots', icon: '🥾', items: ['Ankle Boots', 'Chelsea Boots', 'Combat Boots', 'Hiking Boots'] }
    ],
    accessories: [
      { name: 'Bags', icon: '👜', items: ['Handbags', 'Backpacks', 'Wallets', 'Clutches'] },
      { name: 'Jewelry', icon: '💍', items: ['Rings', 'Necklaces', 'Earrings', 'Bracelets'] },
      { name: 'Watches', icon: '⌚', items: ['Smart Watches', 'Analog', 'Digital', 'Luxury'] },
      { name: 'Eyewear', icon: '🕶️', items: ['Sunglasses', 'Prescription', 'Blue Light', 'Reading'] }
    ]
  };

  const currentSubcategories = subcategories[selectedCategory as keyof typeof subcategories];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        {/* Category Banner */}
        <div className="relative mx-4 mb-6 rounded-2xl overflow-hidden h-32 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-1">
                {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Collection
              </h2>
              <p className="text-sm opacity-90">Delivered in 30 minutes</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-t-3xl min-h-screen">
          <div className="flex">
            {/* Left Sidebar */}
            <div className="w-1/3 border-r border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {currentSubcategories.map((subcategory) => (
                  <button
                    key={subcategory.name}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="text-xl">{subcategory.icon}</span>
                    <span className="font-medium text-gray-700">{subcategory.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right Content */}
            <div className="flex-1 p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentSubcategories.map((subcategory) => (
                  <div key={subcategory.name} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{subcategory.icon}</span>
                      <h4 className="font-semibold text-gray-900">{subcategory.name}</h4>
                    </div>
                    <div className="space-y-2">
                      {subcategory.items.map((item) => (
                        <button
                          key={item}
                          className="block w-full text-left text-sm text-gray-600 hover:text-orange-500 transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
