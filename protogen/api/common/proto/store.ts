
import { Address } from "./address";

export interface Store_PrimaryKey {
  store_id: string; // int64
}

export interface Store {
  primary_key?: Store_PrimaryKey;
  website_url: string;
  image_urls: string[];
  name: string;
  description: string;
  address?: Address;
  distance_in_meters: string; // int64
  time_in_millis: string; // int64
}
