
import React from 'react';

interface BannerProps {
  category: string;
  title: string;
  subtitle: string;
  image: string;
}

const BannerCarousel: React.FC<BannerProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative mx-4 mb-6 rounded-2xl overflow-hidden h-48 bg-gradient-to-r from-gray-900 to-gray-700">
      <img
        src={image}
        alt="Banner"
        className="w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <p className="text-orange-400 text-sm font-medium mb-1">SHOP ABOVE ₹500 TO UNLOCK A FREE PASS!</p>
        <h2 className="text-2xl font-bold mb-1">{title}</h2>
        <p className="text-sm opacity-90">{subtitle}</p>
      </div>
    </div>
  );
};

export default BannerCarousel;
