
export interface ColorVariant {
  color: string;
  image: string;
}

export interface Product {
  id: number;
  images: string[];
  colorVariants: ColorVariant[];
  brandName: string;
  productName: string;
  mrp: number;
  discountedPrice: number;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
    ],
    colorVariants: [
      {
        color: "Red",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
      },
      {
        color: "White",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop"
      }
    ],
    brandName: "Nike",
    productName: "Air Max 90",
    mrp: 12000,
    discountedPrice: 10000
  },
  {
    id: 2,
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400&h=400&fit=crop"
    ],
    colorVariants: [
      {
        color: "Brown",
        image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=400&fit=crop"
      },
      {
        color: "Black",
        image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400&h=400&fit=crop"
      }
    ],
    brandName: "Adidas",
    productName: "Stan Smith",
    mrp: 8000,
    discountedPrice: 7000
  },
  {
    id: 3,
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop"
    ],
    colorVariants: [
      {
        color: "Blue",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop"
      },
      {
        color: "Gray",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop"
      }
    ],
    brandName: "Puma",
    productName: "RS-X Sneakers",
    mrp: 9500,
    discountedPrice: 8500
  },
  {
    id: 4,
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop"
    ],
    colorVariants: [
      {
        color: "Green",
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop"
      },
      {
        color: "Black",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop"
      }
    ],
    brandName: "Converse",
    productName: "Chuck Taylor All Star",
    mrp: 6000,
    discountedPrice: 5500
  },
  {
    id: 5,
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop"
    ],
    colorVariants: [
      {
        color: "White",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop"
      },
      {
        color: "Navy",
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop"
      }
    ],
    brandName: "Reebok",
    productName: "Classic Leather",
    mrp: 7500,
    discountedPrice: 6500
  },
  {
    id: 6,
    images: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400&h=400&fit=crop"
    ],
    colorVariants: [
      {
        color: "Red",
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=400&fit=crop"
      },
      {
        color: "Blue",
        image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400&h=400&fit=crop"
      }
    ],
    brandName: "New Balance",
    productName: "990v5",
    mrp: 15000,
    discountedPrice: 13500
  }
];
