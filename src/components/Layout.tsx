
import React from 'react';
import { MapPin, ShoppingCart, User } from 'lucide-react';
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
      <header className="fixed top-0 left-0 right-0 bg-slate-800 text-white z-40 px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-400" />
            <span className="text-sm">Delivering in Gurugram</span>
          </div>
          
          <h1 
            onClick={() => navigate('/')}
            className="text-xl font-bold tracking-wide cursor-pointer"
          >
            Dripzy
          </h1>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/cart')}
              className="relative p-2 hover:bg-slate-700 rounded-full transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => navigate('/profile')}
              className="p-2 hover:bg-slate-700 rounded-full transition-colors"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 pb-20">
        {children}
      </main>

      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="flex items-center justify-around py-2 max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
              isActive('/') ? 'text-orange-500 bg-orange-50' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center">🏠</div>
            <span className="text-xs font-medium">Home</span>
          </button>
          
          <button
            onClick={() => navigate('/categories')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
              isActive('/categories') ? 'text-orange-500 bg-orange-50' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center">📱</div>
            <span className="text-xs font-medium">Categories</span>
          </button>
          
          <button
            onClick={() => navigate('/cart')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors relative ${
              isActive('/cart') ? 'text-orange-500 bg-orange-50' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center relative">
              🛒
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
            <span className="text-xs font-medium">Cart</span>
          </button>
          
          <button
            onClick={() => navigate('/profile')}
            className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition-colors ${
              isActive('/profile') ? 'text-orange-500 bg-orange-50' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 flex items-center justify-center">👤</div>
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
