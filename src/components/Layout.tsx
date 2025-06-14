
import React from 'react';
import { MapPin, ShoppingCart, User, Grid3X3, House, Clock, Sparkles, Bell } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  selectedSize?: string;
  quantity: number;
}

interface LayoutProps {
  children: React.ReactNode;
  cartItems?: CartItem[];
  onUpdateCartQuantity?: (id: string, quantity: number) => void;
  onRemoveCartItem?: (id: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  cartItems = []
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-black px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-pink-500 mt-0.5" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-300">Delivery in</span>
              <span className="text-sm font-medium text-white">Gurgaon</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-5 h-5 text-white" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <User className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pb-16">
        {children}
      </main>

      {/* Fixed Bottom Navigation - Myntra Style */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="flex items-center justify-around py-2 max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition-colors ${
              isActive('/') ? 'text-pink-500' : 'text-gray-600 hover:text-pink-300'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <House className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">Home</span>
          </button>
          
          <button
            onClick={() => navigate('/quick')}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition-colors ${
              isActive('/quick') ? 'text-pink-500' : 'text-gray-600 hover:text-pink-300'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">In 30 min</span>
          </button>
          
          <button
            onClick={() => navigate('/categories')}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition-colors ${
              isActive('/categories') ? 'text-pink-500' : 'text-gray-600 hover:text-pink-300'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Grid3X3 className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">Categories</span>
            {isActive('/categories') && (
              <div className="w-full h-0.5 bg-pink-500 rounded-full mt-1"></div>
            )}
          </button>
          
          <button
            onClick={() => navigate('/new')}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition-colors ${
              isActive('/new') ? 'text-pink-500' : 'text-gray-600 hover:text-pink-300'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">What's New</span>
          </button>
          
          <button
            onClick={() => navigate('/cart')}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition-colors relative ${
              isActive('/cart') ? 'text-pink-500' : 'text-gray-600 hover:text-pink-300'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center relative">
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
            <span className="text-xs font-medium">Bag</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
