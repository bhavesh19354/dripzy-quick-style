
import { RequestHeader, ResponseHeader } from "../header";
import { Brand } from "../brand";

export interface GetBrandRequest {
  header?: RequestHeader;
}

export interface GetBrandResponse {
  header?: ResponseHeader;
  brands: Brand[];
}
