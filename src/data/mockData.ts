// Mock data for the application
export const categories = [
  {
    id: 'women',
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1494790108755-2616c739087e?w=150&h=150&fit=crop&crop=faces'
  },
  {
    id: 'men',
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces'
  },
  {
    id: 'footwear',
    name: 'Footwear',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=150&h=150&fit=crop'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop'
  }
];

export const banners = {
  women: {
    title: 'YOUR NEXT STATEMENT FIT',
    subtitle: '30 MINS AWAY',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=400&fit=crop'
  },
  men: {
    title: 'ELEVATE YOUR STYLE',
    subtitle: 'DELIVERED IN 30 MINS',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop'
  },
  footwear: {
    title: 'STEP INTO COMFORT',
    subtitle: 'QUICK DELIVERY AWAITS',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=400&fit=crop'
  },
  accessories: {
    title: 'COMPLETE YOUR LOOK',
    subtitle: 'FAST & FASHIONABLE',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop'
  }
};

// Featured Categories for each main category
export const featuredCategories = {
  women: [
    {
      id: 'deal-women',
      name: 'DEAL OF THE DAY',
      subtitle: 'UP TO 40% OFF*',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop',
      isDeal: true
    },
    {
      id: 'new-arrivals-women',
      name: 'NEW ARRIVALS',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop'
    },
    {
      id: 'dresses',
      name: 'DRESSES',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop'
    },
    {
      id: 'tops-women',
      name: 'TOPS',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop'
    },
    {
      id: 'jeans-women',
      name: 'JEANS',
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=600&fit=crop'
    },
    {
      id: 'skirts',
      name: 'SKIRTS',
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d44?w=400&h=600&fit=crop'
    },
    {
      id: 'blazers-women',
      name: 'BLAZERS',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop'
    },
    {
      id: 'accessories-women',
      name: 'ACCESSORIES',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop'
    },
    {
      id: 'essentials-women',
      name: 'ESSENTIALS',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop'
    },
    {
      id: 'plus-size-women',
      name: 'PLUS SIZE',
      image: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=400&h=600&fit=crop'
    },
    {
      id: 'luxe-women',
      name: 'LUXE',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop'
    },
    {
      id: 'under-999-women',
      name: 'DRESSES UNDER',
      subtitle: '₹999',
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d44?w=400&h=600&fit=crop',
      isPriceCategory: true
    }
  ],
  men: [
    {
      id: 'deal-men',
      name: 'DEAL OF THE DAY',
      subtitle: 'UP TO 40% OFF*',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop',
      isDeal: true
    },
    {
      id: 'new-arrivals-men',
      name: 'NEW ARRIVALS',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop'
    },
    {
      id: 'shirts-men',
      name: 'SHIRTS',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop'
    },
    {
      id: 'trousers',
      name: 'TROUSERS',
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=600&fit=crop'
    },
    {
      id: 'cargo-pants',
      name: 'CARGO PANTS',
      image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=600&fit=crop'
    },
    {
      id: 'polo-tshirts',
      name: 'POLO T-SHIRTS',
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=600&fit=crop'
    },
    {
      id: 'graphic-tees',
      name: 'GRAPHIC TEES',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop'
    },
    {
      id: 'baggy-jeans',
      name: 'BAGGY JEANS',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=600&fit=crop'
    },
    {
      id: 'essentials-men',
      name: 'ESSENTIALS',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop'
    },
    {
      id: 'plus-size-men',
      name: 'PLUS SIZE',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop'
    },
    {
      id: 'luxe-men',
      name: 'LUXE',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop'
    },
    {
      id: 'under-999-men',
      name: 'SHIRTS UNDER',
      subtitle: '₹999',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop',
      isPriceCategory: true
    }
  ],
  footwear: [
    {
      id: 'deal-footwear',
      name: 'DEAL OF THE DAY',
      subtitle: 'UP TO 40% OFF*',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop',
      isDeal: true
    },
    {
      id: 'new-arrivals-footwear',
      name: 'NEW ARRIVALS',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop'
    },
    {
      id: 'sneakers',
      name: 'SNEAKERS',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop'
    },
    {
      id: 'boots',
      name: 'BOOTS',
      image: 'https://images.unsplash.com/photo-1608256246200-53e8b47b859d?w=400&h=600&fit=crop'
    },
    {
      id: 'sandals',
      name: 'SANDALS',
      image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400&h=600&fit=crop'
    },
    {
      id: 'formal-shoes',
      name: 'FORMAL SHOES',
      image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&h=600&fit=crop'
    },
    {
      id: 'canvas-shoes',
      name: 'CANVAS SHOES',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=600&fit=crop'
    },
    {
      id: 'sports-shoes',
      name: 'SPORTS SHOES',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=600&fit=crop'
    },
    {
      id: 'essentials-footwear',
      name: 'ESSENTIALS',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop'
    },
    {
      id: 'designer-footwear',
      name: 'DESIGNER',
      image: 'https://images.unsplash.com/photo-1608256246200-53e8b47b859d?w=400&h=600&fit=crop'
    },
    {
      id: 'luxe-footwear',
      name: 'LUXE',
      image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=400&h=600&fit=crop'
    },
    {
      id: 'under-999-footwear',
      name: 'SHOES UNDER',
      subtitle: '₹999',
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=600&fit=crop',
      isPriceCategory: true
    }
  ],
  accessories: [
    {
      id: 'deal-accessories',
      name: 'DEAL OF THE DAY',
      subtitle: 'UP TO 40% OFF*',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop',
      isDeal: true
    },
    {
      id: 'new-arrivals-accessories',
      name: 'NEW ARRIVALS',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=600&fit=crop'
    },
    {
      id: 'watches',
      name: 'WATCHES',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=600&fit=crop'
    },
    {
      id: 'sunglasses',
      name: 'SUNGLASSES',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=600&fit=crop'
    },
    {
      id: 'wallets',
      name: 'WALLETS',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop'
    },
    {
      id: 'belts',
      name: 'BELTS',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop'
    },
    {
      id: 'bags',
      name: 'BAGS',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop'
    },
    {
      id: 'jewelry',
      name: 'JEWELRY',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=600&fit=crop'
    },
    {
      id: 'essentials-accessories',
      name: 'ESSENTIALS',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=600&fit=crop'
    },
    {
      id: 'premium-accessories',
      name: 'PREMIUM',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=600&fit=crop'
    },
    {
      id: 'luxe-accessories',
      name: 'LUXE',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=600&fit=crop'
    },
    {
      id: 'under-999-accessories',
      name: 'ACCESSORIES UNDER',
      subtitle: '₹999',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=600&fit=crop',
      isPriceCategory: true
    }
  ]
};

export const products = {
  women: [
    {
      id: '1',
      name: 'Floral Print Midi Dress',
      price: 2499,
      originalPrice: 3499,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop',
      brand: 'Zara'
    },
    {
      id: '2',
      name: 'High-Waist Skinny Jeans',
      price: 1999,
      originalPrice: 2999,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop',
      brand: 'H&M'
    },
    {
      id: '3',
      name: 'Oversized Blazer',
      price: 3999,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop',
      brand: 'Zara'
    },
    {
      id: '4',
      name: 'Silk Blouse',
      price: 2799,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop',
      brand: 'H&M'
    }
  ],
  men: [
    {
      id: '5',
      name: 'Casual Cotton Shirt',
      price: 1799,
      originalPrice: 2499, 
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop',
      brand: 'Zara'
    },
    {
      id: '6',
      name: 'Slim Fit Chinos',
      price: 2299,
      image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=300&h=400&fit=crop',
      brand: 'H&M'
    },
    {
      id: '7',
      name: 'Denim Jacket',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=300&h=400&fit=crop',
      brand: 'Zara'
    },
    {
      id: '8',
      name: 'Polo T-Shirt',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&h=400&fit=crop',
      brand: 'Jockey'
    }
  ],
  footwear: [
    {
      id: '9',
      name: 'White Sneakers',
      price: 4999,
      originalPrice: 6999,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop',
      brand: 'Nike'
    },
    {
      id: '10',
      name: 'Leather Boots',
      price: 7999,
      image: 'https://images.unsplash.com/photo-1608256246200-53e8b47b859d?w=300&h=400&fit=crop',
      brand: 'Zara'
    },
    {
      id: '11',
      name: 'Canvas Shoes',
      price: 2999,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=300&h=400&fit=crop',
      brand: 'Converse'
    },
    {
      id: '12',
      name: 'Formal Oxfords',
      price: 8999,
      image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=300&h=400&fit=crop',
      brand: 'Clarks'
    }
  ],
  accessories: [
    {
      id: '13',
      name: 'Leather Wallet',
      price: 1999,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop',
      brand: 'Zara'
    },
    {
      id: '14',
      name: 'Aviator Sunglasses',
      price: 2499,
      originalPrice: 3999,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=400&fit=crop',
      brand: 'Ray-Ban'
    },
    {
      id: '15',
      name: 'Leather Belt',
      price: 1599,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop',
      brand: 'H&M'
    },
    {
      id: '16',
      name: 'Smart Watch',
      price: 12999,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=400&fit=crop',
      brand: 'Apple'
    }
  ]
};

export const quickPicks = [
  products.women[0],
  products.men[0],
  products.footwear[0],
  products.accessories[0]
];

export const trendingProducts = [
  products.women[1],
  products.men[1],
  products.footwear[1],
  products.accessories[1]
];

export const justInProducts = [
  products.women[2],
  products.men[2],
  products.footwear[2],
  products.accessories[2]
];
