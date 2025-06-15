
import { ResponseHeader } from "../header";

export interface ItemWithQuantity {
  product_variant_id: string; // int64
  quantity: number; // int32
}

export interface GetCartItemsRequest {}

export interface GetCartItemsResponse {
  header?: ResponseHeader;
  items_with_quantity: ItemWithQuantity[];
}

export interface MutateCartRequest {
  item?: ItemWithQuantity;
}

export interface MutateCartResponse {
  header?: ResponseHeader;
}
