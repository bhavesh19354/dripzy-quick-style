
import { RequestHeader, ResponseHeader } from "../header";
import { Address } from "../address";

export interface OrderReciever {
  reciever_address?: Address;
  house_number_and_floor: string;
  receiver_name: string;
  reciever_phone_number: string;
  customer_address_link_id: string; // int64
}

export interface GetCustomerRequest {
  header?: RequestHeader;
  phone_number: string;
}

export interface GetCustomerResponse {
  header?: ResponseHeader;
  order_recievers: OrderReciever[];
}

export interface AddCustomerAddressRequest {
  header?: RequestHeader;
  order_reciever?: OrderReciever;
}

export interface AddCustomerAddressResponse {
  header?: ResponseHeader;
  customer_address_link_id: string; // int64
}
