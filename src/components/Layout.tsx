
import React from 'react';
import { MapPin, ShoppingCart, User, Grid3X3 } from 'lucide-react';
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
      {/* Fixed Top Header */}
      <header className="fixed top-0 left-0 right-0 bg-black text-white z-40 px-4 py-1">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex flex-col items-start">
            <span className="text-xs">Delivering in</span>
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-orange-400" />
              <span className="text-xs">Gurugram</span>
            </div>
          </div>
          
          <div className="flex-1"></div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/cart')}
              className="relative p-1 hover:bg-gray-800 rounded-full transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className="p-1 hover:bg-gray-800 rounded-full transition-colors"
            >
              <User className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-10 pb-16">
        {children}
      </main>

      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-40">
        <div className="flex items-center justify-around py-1 max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition-colors ${
              isActive('/') ? 'text-orange-500' : 'text-white hover:text-orange-300'
            }`}
          >
            <div className="w-5 h-5 flex items-center justify-center text-lg">🏠</div>
            <span className="text-xs font-medium">Home</span>
          </button>
          
          <button
            onClick={() => navigate('/categories')}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition-colors ${
              isActive('/categories') ? 'text-orange-500' : 'text-white hover:text-orange-300'
            }`}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <Grid3X3 className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium">Categories</span>
          </button>
          
          <button
            onClick={() => navigate('/cart')}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition-colors relative ${
              isActive('/cart') ? 'text-orange-500' : 'text-white hover:text-orange-300'
            }`}
          >
            <div className="w-5 h-5 flex items-center justify-center relative">
              <ShoppingCart className="w-4 h-4" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
            <span className="text-xs font-medium">Cart</span>
          </button>
          
          <button
            onClick={() => navigate('/profile')}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition-colors ${
              isActive('/profile') ? 'text-orange-500' : 'text-white hover:text-orange-300'
            }`}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
