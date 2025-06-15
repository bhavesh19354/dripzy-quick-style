import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import { Filter, SortAsc, ArrowLeft, X } from 'lucide-react';
import { mockProducts, type Product } from '../data/productData';

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

const ProductListing: React.FC = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 20000 });
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [loading, setLoading] = useState(true);

  // Available brands from products
  const availableBrands = Array.from(new Set(mockProducts.map(p => p.brandName)));

  // Filter chips data
  const filterChips = [
    { id: 'tops', label: 'Tops', active: subcategory === 'tops' },
    { id: 'dresses', label: 'Dresses', active: subcategory === 'dresses' },
    { id: 'new', label: 'New In', active: false },
    { id: 'sale', label: 'Sale', active: false },
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter and sort products
  useEffect(() => {
    let filtered = mockProducts.filter(product => {
      const matchesPrice = product.discountedPrice >= priceRange.min && product.discountedPrice <= priceRange.max;
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brandName);
      return matchesPrice && matchesBrand;
    });

    // Sort products
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.discountedPrice - b.discountedPrice;
        case 'price-high':
          return b.discountedPrice - a.discountedPrice;
        case 'name':
          return a.productName.localeCompare(b.productName);
        case 'brand':
          return a.brandName.localeCompare(b.brandName);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [priceRange, selectedBrands, sortBy]);

  const handleUpdateCartQuantity = (id: string, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleBrandFilter = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setPriceRange({ min: 0, max: 20000 });
    setSelectedBrands([]);
    setSortBy('featured');
  };

  return (
    <Layout 
      cartItems={cartItems}
      onUpdateCartQuantity={handleUpdateCartQuantity}
      onRemoveCartItem={handleRemoveCartItem}
    >
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-white px-4 py-4 border-b sticky top-16 z-10">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900 capitalize">
                  {subcategory || category || 'Products'}
                </h1>
                <p className="text-sm text-gray-600">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-3 py-2 border rounded-lg transition-colors ${
                  showFilters ? 'bg-blue-50 border-blue-300 text-blue-700' : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
                <option value="brand">Brand</option>
              </select>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {filterChips.map(chip => (
              <button
                key={chip.id}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-colors ${
                  chip.active 
                    ? 'bg-gray-900 text-white border-gray-900' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 bg-white border-r border-gray-200 p-6 min-h-screen">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Filters</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={clearFilters}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Price Range</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value)})}
                      className="w-24 px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
                      className="w-24 px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
                    className="w-full accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>₹0</span>
                    <span>₹20,000+</span>
                  </div>
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-3">Brands</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {availableBrands.map(brand => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandFilter(brand)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-600">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1 p-4 md:p-6">
            <ProductGrid 
              products={filteredProducts} 
              loading={loading}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListing;
