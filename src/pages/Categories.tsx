
import React, { useState } from 'react';
import Layout from '../components/Layout';
import CategorySelector from '../components/CategorySelector';
import { categories, featuredCategories } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('women');
  const navigate = useNavigate();

  const currentFeaturedCategories = featuredCategories[selectedCategory as keyof typeof featuredCategories];

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/products/${selectedCategory}/${categoryId}`);
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        {/* Ethnic Collection Banner */}
        <div className="relative mx-4 mb-6 rounded-2xl overflow-hidden h-64 bg-gradient-to-r from-orange-100 to-orange-200">
          <img
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=400&fit=crop"
            alt="Ethnic Collection Banner"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          
          {/* Banner Content */}
          <div className="absolute top-8 left-8">
            <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              UPTO 70% OFF
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Ethnic Collection</h1>
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              SHOP NOW
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-t-3xl min-h-screen pt-8">
          {/* Brand Categories */}
          <div className="px-4 mb-8">
            <div className="grid grid-cols-3 gap-4 mb-8">
              {/* Brand Cards */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-orange-200 to-orange-300">
                <img
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop"
                  alt="Sadhana Villa"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-white text-black px-3 py-1 rounded text-sm font-bold">
                    Sadhana
                  </div>
                  <div className="text-white text-xs mt-1">VILLA</div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-purple-200 to-purple-300">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&h=400&fit=crop"
                  alt="Ethnic Elements"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="text-white text-lg font-bold">Ethnic Elements</div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-gradient-to-br from-pink-200 to-pink-300">
                <img
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop"
                  alt="Shree"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="text-white text-lg font-bold">श्री | SHREE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Grid */}
          <div className="px-4">
            <h2 className="text-xl font-bold text-gray-900 text-center mb-6 tracking-wide">
              SHOP BY CATEGORY
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {currentFeaturedCategories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className="relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer group"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    {category.isDeal && (
                      <div className="mb-2">
                        <div className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                          SNITCH DEAL OF THE DAY
                        </div>
                      </div>
                    )}
                    
                    <div className="text-white">
                      <h3 className="font-bold text-sm mb-1">
                        {category.name}
                      </h3>
                      
                      {category.subtitle && (
                        <p className={`text-sm font-bold ${
                          category.isPriceCategory 
                            ? 'text-yellow-400 text-lg' 
                            : category.isDeal 
                              ? 'text-white text-xs' 
                              : 'text-gray-200'
                        }`}>
                          {category.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
