
import { RequestHeader, ResponseHeader } from "../header";
import { Filter } from "../filter";
import { Product, ProductDetails } from "../product";
import { CategorySet } from "../category";

export enum Field_Enum {
  UNKNOWN = 0,
  PRODUCT_KEY = 1,
  BRAND_KEY = 2,
  STORE_KEY = 3,
  PRODUCT_VARIANT_KEY = 4,
  GENDER = 5,
  CATEGORY = 6,
  RATING = 7,
  DISCOUNT_PRICE_MICROS = 8,
  DISCOUNT_PERCENTAGE = 9,
  DISTANCE = 10,
  OFFER = 11,
  FROM_DELIVERY_PARTNERS = 12,
  CATEGORY_ID = 13,
}

export interface GetProductRequest_OrderBy {
  selector: Field_Enum;
  descending: boolean;
}

export interface ProductSelector {
  field: Field_Enum;
  filter?: Filter;
}

export interface GetProductRequest {
  header?: RequestHeader;
  search_query: string;
  selectors: ProductSelector[];
  order_by: GetProductRequest_OrderBy[];
}

export interface GetProductResponse {
  header?: ResponseHeader;
  products: Product[];
}

export interface GetProductDetailsRequest {
  header?: RequestHeader;
  product_id: string; // int64
}

export interface GetProductDetailsResponse {
  header?: ResponseHeader;
  product_details?: ProductDetails;
}

export interface GetCategorySetRequest {
  header?: RequestHeader;
}

export interface GetCategorySetResponse {
  header?: ResponseHeader;
  category_set?: CategorySet;
}
