
import React, { useState } from 'react';

const NavigationBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'Women', 'Men', 'Kids', 'Accessories', 'Beauty'];

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex gap-1 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
