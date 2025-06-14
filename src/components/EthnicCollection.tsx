import React from 'react';
import { useNavigate } from 'react-router-dom';
interface EthnicBrand {
  id: string;
  name: string;
  image: string;
  backgroundColor: string;
}
const EthnicCollection: React.FC = () => {
  const navigate = useNavigate();
  const ethnicBrands: EthnicBrand[] = [{
    id: 'libas',
    name: 'LIBAS',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=500&fit=crop',
    backgroundColor: 'from-orange-400 to-orange-600'
  }, {
    id: 'imara',
    name: 'IMARA',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
    backgroundColor: 'from-amber-700 to-amber-900'
  }, {
    id: 'binks',
    name: 'Binks',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=500&fit=crop',
    backgroundColor: 'from-amber-500 to-amber-700'
  }, {
    id: 'kalini',
    name: 'KALINI',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
    backgroundColor: 'from-stone-400 to-stone-600'
  }, {
    id: 'here-now',
    name: 'HERE&NOW',
    image: 'https://images.unsplash.com/photo-1583391733981-24c9c66cbad7?w=400&h=500&fit=crop',
    backgroundColor: 'from-green-600 to-green-800'
  }];
  const handleShopNow = () => {
    navigate('/products/women/ethnic-wear');
  };
  const handleBrandClick = (brandId: string) => {
    navigate(`/products/women/${brandId}`);
  };
  return <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-6 px-4 mb-6">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-6 mb-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-orange-300 to-amber-300 rounded-full opacity-20"></div>
          <div className="absolute bottom-4 right-8 w-24 h-24 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full opacity-15"></div>
        </div>
        
        <div className="relative z-10">
          <div className="mb-4">
            <div className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-bold mb-3">UPTO 50% OFF</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Featured Brands</h2>
          </div>
          
          <button onClick={handleShopNow} className="bg-white text-black px-6 py-3 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors shadow-md">
            SHOP NOW
          </button>
        </div>

        {/* Models - Hidden on mobile for cleaner look */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-orange-100 opacity-30"></div>
          <img src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&h=400&fit=crop" alt="Ethnic Wear Models" className="w-full h-full object-cover opacity-60" />
        </div>
      </div>

      {/* Brands Section */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Shop by Brand</h3>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {ethnicBrands.map(brand => <div key={brand.id} onClick={() => handleBrandClick(brand.id)} className="flex-shrink-0 w-32 h-40 cursor-pointer group">
              {/* Indian Arch Frame */}
              <div className={`relative w-full h-full bg-gradient-to-b ${brand.backgroundColor} rounded-t-full rounded-b-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                {/* Arch decoration */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-b-full"></div>
                
                {/* Image */}
                <div className="absolute inset-2 rounded-t-full rounded-b-lg overflow-hidden">
                  <img src={brand.image} alt={brand.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                
                {/* Brand Name */}
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <span className="text-white text-xs font-bold bg-black bg-opacity-60 px-2 py-1 rounded">
                    {brand.name}
                  </span>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};
export default EthnicCollection;