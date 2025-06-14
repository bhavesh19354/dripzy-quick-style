
import React, { useState } from 'react';
import Layout from '../components/Layout';
import CategorySelector from '../components/CategorySelector';
import { categories } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('women');
  const [selectedMainCategory, setSelectedMainCategory] = useState('topwear');
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/products/${selectedCategory}/${categoryId}`);
  };

  // Main categories for each section
  const mainCategories = {
    women: [
      { id: 'topwear', name: 'Top Wear', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=300&fit=crop' },
      { id: 'bottomwear', name: 'Bottom Wear', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200&h=300&fit=crop' },
      { id: 'dresses', name: 'Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&h=300&fit=crop' },
      { id: 'nightwear', name: 'Nightwear', image: 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=200&h=300&fit=crop' }
    ],
    men: [
      { id: 'topwear', name: 'Top Wear', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&h=300&fit=crop' },
      { id: 'bottomwear', name: 'Bottom Wear', image: 'https://images.unsplash.com/photo-1506629905543-2ad2bb0b9348?w=200&h=300&fit=crop' },
      { id: 'jackets', name: 'Jackets & Coats', image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=200&h=300&fit=crop' },
      { id: 'activewear', name: 'Activewear', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=300&fit=crop' }
    ],
    kids: [
      { id: 'boys', name: 'Boys', image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=200&h=300&fit=crop' },
      { id: 'girls', name: 'Girls', image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=200&h=300&fit=crop' },
      { id: 'baby', name: 'Baby', image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=200&h=300&fit=crop' },
      { id: 'toys', name: 'Toys', image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=200&h=300&fit=crop' }
    ],
    accessories: [
      { id: 'bags', name: 'Bags', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=300&fit=crop' },
      { id: 'jewelry', name: 'Jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=300&fit=crop' },
      { id: 'watches', name: 'Watches', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200&h=300&fit=crop' },
      { id: 'sunglasses', name: 'Sunglasses', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=300&fit=crop' }
    ]
  };

  // Sub-categories for each main category
  const subCategories = {
    women: {
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
    },
    men: {
      topwear: [
        { id: 'tshirts', name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop' },
        { id: 'shirts', name: 'Shirts', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&h=200&fit=crop' },
        { id: 'polos', name: 'Polo Shirts', image: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=200&h=200&fit=crop' },
        { id: 'hoodies', name: 'Hoodies', image: 'https://images.unsplash.com/photo-1556821840-3a9c6ee35cde?w=200&h=200&fit=crop' },
        { id: 'sweaters', name: 'Sweaters', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=200&h=200&fit=crop' },
        { id: 'tank-tops', name: 'Tank Tops', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200&h=200&fit=crop' }
      ],
      bottomwear: [
        { id: 'jeans', name: 'Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop' },
        { id: 'trousers', name: 'Trousers', image: 'https://images.unsplash.com/photo-1506629905543-2ad2bb0b9348?w=200&h=200&fit=crop' },
        { id: 'shorts', name: 'Shorts', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=200&h=200&fit=crop' },
        { id: 'cargo-pants', name: 'Cargo Pants', image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=200&h=200&fit=crop' }
      ],
      jackets: [
        { id: 'blazers', name: 'Blazers', image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=200&h=200&fit=crop' },
        { id: 'leather-jackets', name: 'Leather Jackets', image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=200&h=200&fit=crop' },
        { id: 'denim-jackets', name: 'Denim Jackets', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop' }
      ],
      activewear: [
        { id: 'gym-wear', name: 'Gym Wear', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop' },
        { id: 'sports-shorts', name: 'Sports Shorts', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=200&h=200&fit=crop' },
        { id: 'track-suits', name: 'Track Suits', image: 'https://images.unsplash.com/photo-1556821840-3a9c6ee35cde?w=200&h=200&fit=crop' }
      ]
    },
    kids: {
      boys: [
        { id: 'boys-tshirts', name: 'T-Shirts', image: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=200&h=200&fit=crop' },
        { id: 'boys-jeans', name: 'Jeans', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=200&fit=crop' },
        { id: 'boys-shorts', name: 'Shorts', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=200&h=200&fit=crop' }
      ],
      girls: [
        { id: 'girls-dresses', name: 'Dresses', image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=200&h=200&fit=crop' },
        { id: 'girls-tops', name: 'Tops', image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=200&fit=crop' },
        { id: 'girls-skirts', name: 'Skirts', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d14?w=200&h=200&fit=crop' }
      ],
      baby: [
        { id: 'baby-onesies', name: 'Onesies', image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=200&h=200&fit=crop' },
        { id: 'baby-rompers', name: 'Rompers', image: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?w=200&h=200&fit=crop' }
      ],
      toys: [
        { id: 'educational-toys', name: 'Educational Toys', image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=200&h=200&fit=crop' },
        { id: 'action-figures', name: 'Action Figures', image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=200&h=200&fit=crop' }
      ]
    },
    accessories: {
      bags: [
        { id: 'handbags', name: 'Handbags', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop' },
        { id: 'backpacks', name: 'Backpacks', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop' },
        { id: 'wallets', name: 'Wallets', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=200&h=200&fit=crop' }
      ],
      jewelry: [
        { id: 'necklaces', name: 'Necklaces', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop' },
        { id: 'earrings', name: 'Earrings', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop' },
        { id: 'bracelets', name: 'Bracelets', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop' }
      ],
      watches: [
        { id: 'smart-watches', name: 'Smart Watches', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200&h=200&fit=crop' },
        { id: 'analog-watches', name: 'Analog Watches', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=200&h=200&fit=crop' }
      ],
      sunglasses: [
        { id: 'aviator', name: 'Aviator', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop' },
        { id: 'wayfarer', name: 'Wayfarer', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop' }
      ]
    }
  };

  const currentMainCategories = mainCategories[selectedCategory as keyof typeof mainCategories] || [];
  const currentSubCategories = subCategories[selectedCategory as keyof typeof subCategories]?.[selectedMainCategory as keyof typeof subCategories['women']] || [];

  const getCategoryTitle = () => {
    const categoryName = selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
    const mainCategoryName = currentMainCategories.find(c => c.id === selectedMainCategory)?.name || '';
    return `${categoryName}'s ${mainCategoryName}`;
  };

  // Reset main category when changing the main category
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const newMainCategories = mainCategories[categoryId as keyof typeof mainCategories];
    if (newMainCategories && newMainCategories.length > 0) {
      setSelectedMainCategory(newMainCategories[0].id);
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Category selector at the top */}
        <div className="bg-white">
          <CategorySelector
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        <div className="flex">
          {/* Left Sidebar */}
          <div className="w-1/4 bg-white border-r border-gray-200 sticky top-16 h-screen overflow-y-auto">
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Categories</h2>
              
              {currentMainCategories.map((category) => (
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
                src={currentMainCategories.find(c => c.id === selectedMainCategory)?.image || 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=400&fit=crop'}
                alt={getCategoryTitle()}
                className="absolute right-0 top-0 h-full w-1/2 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>
              
              <div className="absolute top-8 left-8">
                <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                  {getCategoryTitle()}
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
      </div>
    </Layout>
  );
};

export default Categories;
