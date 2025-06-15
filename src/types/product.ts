
export interface ApiProduct {
  primary_key: {
    product_id: number;
  };
  brand_id: number;
  brand_name: string;
  min_discounted_price_product_variant: {
    product_variant: {
      product_variant_id: number;
      name: string;
      description: string;
      image_url: string;
      color_id: number;
      color_name: string;
      size_id: number;
      size_name: string;
      mrp_micros: number;
    };
    store_with_best_price: {
      primary_key: {
        store_id: number;
      };
      image_urls: string;
      name: string;
      address: {
        full_address: string;
        latitude: number;
        longitude: number;
        postal_code: string;
        city: string;
      };
      distance_in_meters: number;
      time_in_millis: number;
    };
    discounted_price_micros: number;
  };
}

export interface Product {
  id: number;
  images: string[];
  colorVariants: {
    color: string;
    image: string;
  }[];
  brandName: string;
  productName: string;
  mrp: number;
  discountedPrice: number;
}
