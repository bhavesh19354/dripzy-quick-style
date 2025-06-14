
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { categories } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Search } from 'lucide-react';

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('women');
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/products/${selectedCategory}/${categoryId}`);
  };

  // Vertical sidebar categories
  const sidebarCategories = [
    { id: 'women', name: "Women's\nWear", icon: '👗', bgColor: 'bg-pink-100', textColor: 'text-pink-600', borderColor: 'border-pink-200' },
    { id: 'men', name: "Men's\nWear", icon: '👔', bgColor: 'bg-gray-100', textColor: 'text-gray-600', borderColor: 'border-gray-200' },
    { id: 'footwear', name: 'Footwear', icon: '👠', bgColor: 'bg-gray-100', textColor: 'text-gray-600', borderColor: 'border-gray-200' },
    { id: 'accessories', name: 'Beauty &\nGrooming', icon: '💄', bgColor: 'bg-gray-100', textColor: 'text-gray-600', borderColor: 'border-gray-200' },
    { id: 'kids', name: 'Kids\nWear', icon: '👶', bgColor: 'bg-gray-100', textColor: 'text-gray-600', borderColor: 'border-gray-200' },
    { id: 'home', name: 'Home &\nLiving', icon: '🏠', bgColor: 'bg-gray-100', textColor: 'text-gray-600', borderColor: 'border-gray-200' }
  ];

  // Category content data
  const categoryContent = {
    women: {
      banner: {
        title: "Women's Fashion Store",
        image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop'
      },
      westernWear: [
        { id: 'dresses', name: 'Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=150&h=150&fit=crop' },
        { id: 'tops', name: 'Tops', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=150&h=150&fit=crop' },
        { id: 'jeans', name: 'Jeans', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=150&h=150&fit=crop' },
        { id: 'trousers', name: 'Trousers', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=150&fit=crop' },
        { id: 'tshirts', name: 'T-shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop' },
        { id: 'shirts', name: 'Shirts', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=150&h=150&fit=crop' },
        { id: 'coords', name: 'Co-ords', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=150&h=150&fit=crop' },
        { id: 'skirts', name: 'Skirts & Shorts', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d14?w=150&h=150&fit=crop' },
        { id: 'jumpsuits', name: 'Jumpsuits', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=150&h=150&fit=crop' }
      ],
      ethnicWear: [
        { id: 'kurta-sets', name: 'Kurta Sets', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=150&h=150&fit=crop' },
        { id: 'kurtas', name: 'Kurtas', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150&h=150&fit=crop' },
        { id: 'ethnic-alley', name: 'Ethnic Alley', image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=150&h=150&fit=crop' }
      ]
    }
  };

  const currentContent = categoryContent[selectedCategory as keyof typeof categoryContent] || categoryContent.women;

  const handleSidebarCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Top Status Bar */}
        <div className="bg-white px-4 py-2 flex justify-between items-center text-sm">
          <span className="font-medium">7:29</span>
          <div className="flex items-center gap-2">
            <span className="text-xs">4G</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
              <span className="bg-yellow-400 text-black text-xs px-1 rounded">27</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white px-4 pb-3">
          <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
            <Search className="w-4 h-4 text-gray-500" />
            <span className="text-gray-500 text-sm">Search for products...</span>
          </div>
        </div>

        <div className="flex">
          {/* Vertical Sidebar */}
          <div className="w-20 bg-white border-r border-gray-200 min-h-screen">
            <div className="py-4 space-y-4">
              {sidebarCategories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => handleSidebarCategoryChange(category.id)}
                  className={`mx-2 cursor-pointer transition-all ${
                    selectedCategory === category.id 
                      ? `${category.bgColor} ${category.borderColor} border-2 shadow-sm` 
                      : 'hover:bg-gray-50'
                  } rounded-xl p-2`}
                >
                  <div className="flex flex-col items-center">
                    <div className="text-2xl mb-1">{category.icon}</div>
                    <span className={`text-xs font-medium text-center leading-tight ${
                      selectedCategory === category.id 
                        ? category.textColor 
                        : 'text-gray-600'
                    }`} style={{ whiteSpace: 'pre-line' }}>
                      {category.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white">
            {/* Banner */}
            <div className="p-4">
              <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl p-4 relative overflow-hidden">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-bold text-purple-800 mb-1">{currentContent.banner.title}</h2>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={currentContent.banner.image}
                      alt="Fashion"
                      className="w-16 h-16 rounded-lg object-cover mr-2"
                    />
                    <ChevronRight className="w-5 h-5 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Western Wear Section */}
            <div className="px-4 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Western Wear</h3>
              <div className="grid grid-cols-3 gap-4">
                {currentContent.westernWear.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleCategoryClick(item.id)}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-2 bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-700 text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ethnic Wear Section */}
            <div className="px-4 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Ethnic Wear</h3>
              <div className="flex gap-6 overflow-x-auto pb-2">
                {currentContent.ethnicWear.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleCategoryClick(item.id)}
                    className="flex flex-col items-center cursor-pointer flex-shrink-0"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-2 bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-700 text-center">{item.name}</span>
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
