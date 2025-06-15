
import { Offer } from "./offer";
import { Store } from "./store";

export interface Product_PrimaryKey {
  product_id: string; // int64
}

export interface ProductVariant {
  product_variant_id: string; // int64
  name: string;
  description: string;
  image_url: string;
  color_id: string; // int64
  color_name: string;
  size_id: string; // int64
  size_name: string;
  mrp_micros: string; // int64
}

export interface ProductVariantWithStore {
  product_variant?: ProductVariant;
  store_with_best_price?: Store;
  discounted_price_micros: string; // int64
}

export interface Product {
  primary_key?: Product_PrimaryKey;
  brand_id: string; // int64
  brand_name: string;
  min_discounted_price_product_variant?: ProductVariantWithStore;
  offers: Offer[];
}

export interface Size {
  size_id: string; // int64
  size_name: string;
  product_variant_id: string; // int64
  product_variant_name: string;
  product_variant_description: string;
  mrp_micros: string; // int64
  store_with_best_price?: Store;
  discounted_price_mircos: string; // int64
  quantity: string; // int64
}

export interface Color {
  color_id: string; // int64
  color_name: string;
  product_image_urls: string[];
  sizes: Size[];
}

export interface ProductDetails {
  product_id: string; // int64
  brand_id: string; // int64
  brand_name: string;
  colors: Color[];
}
