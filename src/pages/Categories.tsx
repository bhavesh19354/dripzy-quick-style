
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { categories, featuredCategories } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('women');
  const navigate = useNavigate();

  const currentFeaturedCategories = featuredCategories[selectedCategory as keyof typeof featuredCategories];

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/products/${selectedCategory}/${categoryId}`);
  };

  const categoryImages = {
    'Top Wear': 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=300&fit=crop',
    'Bottom Wear': 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&h=300&fit=crop',
    'Dresses': 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=300&fit=crop',
    'Nightwear': 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=200&h=300&fit=crop'
  };

  const mainCategories = [
    { id: 'topwear', name: 'Top Wear', image: categoryImages['Top Wear'] },
    { id: 'bottomwear', name: 'Bottom Wear', image: categoryImages['Bottom Wear'] },
    { id: 'dresses', name: 'Dresses', image: categoryImages['Dresses'] },
    { id: 'nightwear', name: 'Nightwear', image: categoryImages['Nightwear'] }
  ];

  const [selectedMainCategory, setSelectedMainCategory] = useState('topwear');

  const subCategories = {
    topwear: [
      { id: 'tshirts', name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop' },
      { id: 'cardigans', name: 'Cardigans & Shrugs', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&h=200&fit=crop' },
      { id: 'bustiers', name: 'Bustiers & Corsets', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop' },
      { id: 'tops', name: 'Tops', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop' },
      { id: 'bodysuits', name: 'Bodysuits', image: 'https://images.unsplash.com/photo-1583396313515-14ba15d9abdc?w=200&h=200&fit=crop' },
      { id: 'jackets', name: 'Jackets', image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=200&h=200&fit=crop' },
      { id: 'shirts', name: 'Shirts', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop' },
      { id: 'polos', name: 'Polos', image: 'https://images.unsplash.com/photo-1503341960582-b45751874cf0?w=200&h=200&fit=crop' },
      { id: 'hoodies', name: 'Hoodies & Sweatshirts', image: 'https://images.unsplash.com/photo-1556821840-3a9c6ee35cde?w=200&h=200&fit=crop' }
    ],
    bottomwear: [
      { id: 'jeans', name: 'Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop' },
      { id: 'trousers', name: 'Trousers', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop' },
      { id: 'skirts', name: 'Skirts', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d14?w=200&h=200&fit=crop' },
      { id: 'shorts', name: 'Shorts', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=200&h=200&fit=crop' }
    ],
    dresses: [
      { id: 'casual-dresses', name: 'Casual Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=200&fit=crop' },
      { id: 'party-dresses', name: 'Party Dresses', image: 'https://images.unsplash.com/photo-1566479179817-c8d63ebdd193?w=200&h=200&fit=crop' },
      { id: 'maxi-dresses', name: 'Maxi Dresses', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&h=200&fit=crop' }
    ],
    nightwear: [
      { id: 'pajamas', name: 'Pajamas', image: 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=200&h=200&fit=crop' },
      { id: 'nightgowns', name: 'Nightgowns', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop' },
      { id: 'robes', name: 'Robes', image: 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=200&h=200&fit=crop' }
    ]
  };

  const currentSubCategories = subCategories[selectedMainCategory as keyof typeof subCategories] || [];

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen flex">
        {/* Left Sidebar */}
        <div className="w-1/4 bg-white border-r border-gray-200 sticky top-16 h-screen overflow-y-auto">
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Categories</h2>
            
            {mainCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedMainCategory(category.id)}
                className={`mb-4 cursor-pointer p-3 rounded-lg transition-all ${
                  selectedMainCategory === category.id 
                    ? 'bg-orange-50 border-2 border-orange-200 shadow-md' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <span className={`font-medium text-center ${
                    selectedMainCategory === category.id 
                      ? 'text-orange-600 text-lg' 
                      : 'text-gray-700'
                  }`}>
                    {category.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          {/* Banner Section */}
          <div className="relative h-64 bg-gradient-to-r from-orange-100 via-pink-100 to-purple-100 mx-4 mt-4 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=400&fit=crop"
              alt="Women's Fashion Banner"
              className="absolute right-0 top-0 h-full w-1/2 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>
            
            <div className="absolute top-8 left-8">
              <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                {selectedCategory === 'women' ? "Women's" : "Men's"} {mainCategories.find(c => c.id === selectedMainCategory)?.name}
              </h1>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors flex items-center gap-2">
                Shop Now
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sub-Categories Grid */}
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {currentSubCategories.map((subCategory) => (
                <div
                  key={subCategory.id}
                  onClick={() => handleCategoryClick(subCategory.id)}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-full h-40 mb-4 rounded-lg overflow-hidden bg-gray-50">
                      <img
                        src={subCategory.image}
                        alt={subCategory.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-medium text-gray-900 text-center">
                      {subCategory.name}
                    </h3>
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
