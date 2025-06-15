
import { Address } from "./address";
import { Code_Enum } from "../enums/codes";

export interface RequestHeader {
  customer_address?: Address;
}

export interface ResponseHeader {
  status: Code_Enum;
}
