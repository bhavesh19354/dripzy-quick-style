
import React from 'react';
import { ArrowLeft, Search, ShoppingCart, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-lg font-semibold text-gray-900">Products</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Search className="w-5 h-5 text-gray-600" />
          </button>
          <button 
            onClick={() => navigate('/cart')}
            className="p-2 rounded-full hover:bg-gray-100 relative"
          >
            <ShoppingCart className="w-5 h-5 text-gray-600" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          </button>
          <button 
            onClick={() => navigate('/profile')}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <User className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
