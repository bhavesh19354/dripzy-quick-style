
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Filter, SortAsc } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';

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

const ProductListing: React.FC = () => {
  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Get products based on category
  const categoryProducts = products[category as keyof typeof products] || [];
  
  // Filter and sort products
  const filteredProducts = categoryProducts.filter(product => {
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    return matchesPrice && matchesBrand;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

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

  const handleUpdateCartQuantity = (id: string, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const brands = ['Zara', 'H&M', 'Jockey', 'Nike', 'Adidas'];

  return (
    <Layout 
      cartItems={cartItems}
      onUpdateCartQuantity={handleUpdateCartQuantity}
      onRemoveCartItem={handleRemoveCartItem}
    >
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-white px-4 py-4 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900 capitalize">
                {subcategory || category}
              </h1>
              <p className="text-sm text-gray-600">{sortedProducts.length} products</p>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter className="w-4 h-4" />
                Filter
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg bg-white"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-64 bg-white border-r border-gray-200 p-4">
              <h3 className="font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Price Range</h4>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value)})}
                    className="w-20 px-2 py-1 border border-gray-300 rounded"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
                    className="w-20 px-2 py-1 border border-gray-300 rounded"
                  />
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-700 mb-2">Brands</h4>
                {brands.map(brand => (
                  <label key={brand} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedBrands([...selectedBrands, brand]);
                        } else {
                          setSelectedBrands(selectedBrands.filter(b => b !== brand));
                        }
                      }}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-600">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1 p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sortedProducts.map((product) => (
                <div key={product.id} onClick={() => handleProductClick(product.id)}>
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </div>
            
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListing;
