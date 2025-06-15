
import { RequestHeader, ResponseHeader } from "../header";
import { Filter } from "../filter";
import { Product_PrimaryKey } from "../product";
import { Store } from "../store";

export enum Field_Enum {
  UNKNOWN = 0,
  STORE_KEY = 1,
  BRAND_KEY = 2,
  PRODUCT_KEY = 3,
  GENDER = 4,
  CATEGORY = 5,
  RATING = 6,
  DISCOUNT_PERCENTAGE = 7,
  DISTANCE = 8,
}

export interface GetStoreRequest_OrderBy {
  field: Field_Enum;
  descending: boolean;
}

export interface StoreSelector {
  field: Field_Enum;
  filter?: Filter;
}

export interface GetStoreRequest {
  header?: RequestHeader;
  selectors: StoreSelector[];
  order_by: GetStoreRequest_OrderBy[];
}

export interface GetStoreResponse {
  header?: ResponseHeader;
  stores: Store[];
}

export interface GetStorePriceForProductRequest {
  header?: RequestHeader;
  product_key?: Product_PrimaryKey;
}

export interface GetStorePriceForProductResponse_StorePrice {
  store?: Store;
  discounted_price_micros: string; // int64
}

export interface GetStorePriceForProductResponse {
  header?: ResponseHeader;
  store_prices: GetStorePriceForProductResponse_StorePrice[];
}
