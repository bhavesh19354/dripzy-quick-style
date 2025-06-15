import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Auth from './Auth';
import { fetchCartItems, updateCartItemQuantity } from "../api/cartClient";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  selectedSize?: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  // We'll maintain the UI state for detailed product data, but quantity/state comes from backend.
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCart() {
      setLoading(true);
      try {
        // Fetch cart items from backend
        const response = await fetchCartItems();
        // response.getItemsWithQuantityList() gives an array of ItemWithQuantity
        const backendCart = response.getItemsWithQuantityList().map((item) => ({
          id: String(item.getProductVariantId()),
          name: "Product Name", // Look up or use mock data for mapping here!
          price: 999, // Lookup real price & info later for a ProductVariantId!
          image: "/placeholder.svg",
          brand: "Brand",
          selectedSize: "",
          quantity: item.getQuantity(),
        }));
        setCartItems(backendCart);
      } catch (e) {
        // Simple error alert (replace with toast if desired)
        window.alert("Failed to load cart: " + (e as Error).message);
      }
      setLoading(false);
    }
    loadCart();
  }, []);
  
  // Show login screen if user is not authenticated
  if (!isAuthenticated) {
    return <Auth />;
  }

  // These handlers now call backend API and refetch cart
  const handleUpdateQuantity = async (id: string, newQuantity: number) => {
    try {
      await updateCartItemQuantity(Number(id), newQuantity);
      // Refetch after mutation
      const response = await fetchCartItems();
      const backendCart = response.getItemsWithQuantityList().map((item) => ({
        id: String(item.getProductVariantId()),
        name: "Product Name",
        price: 999,
        image: "/placeholder.svg",
        brand: "Brand",
        selectedSize: "",
        quantity: item.getQuantity(),
      }));
      setCartItems(backendCart);
    } catch (e) {
      window.alert("Failed to update item: " + (e as Error).message);
    }
  };

  const handleRemoveItem = async (id: string) => {
    await handleUpdateQuantity(id, 0);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 99;
  const total = subtotal + deliveryFee;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (loading) {
    return (
      <Layout>
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
          <p>Loading cart...</p>
        </div>
      </Layout>
    );
  }

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <ShoppingBag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some items to get started</p>
            <button 
              onClick={() => navigate('/categories')}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="bg-white px-4 py-4 border-b">
          <h1 className="text-xl font-bold text-gray-900">Shopping Cart ({cartItems.length} items)</h1>
        </div>

        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.brand}</p>
                        <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 rounded-full"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-medium">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 rounded-full"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="font-semibold text-lg">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg p-6 shadow-sm h-fit">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium">₹{deliveryFee}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg">₹{total}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Proceed to Checkout
            </button>
            
            <button 
              onClick={() => navigate('/categories')}
              className="w-full mt-3 border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
