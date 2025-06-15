
import { ResponseHeader } from "../header";

export interface ProductVariantWithQuantity {
  product_variant_id: string; // int64
  quantity: number; // int32
}

export interface PlaceOrderRequest {
  product_variants_with_quantity: ProductVariantWithQuantity[];
  customer_address_link_id: string; // int64
}

export interface PlaceOrderResponse {
  header?: ResponseHeader;
  order_number: string;
  razorpay_order_id: string;
  amount_micros: string; // int64
}

export interface ConfirmPaymentRequest {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

export interface ConfirmPaymentResponse {
  header?: ResponseHeader;
  success: boolean;
  order_number: string;
}
