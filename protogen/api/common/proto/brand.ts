
export interface Brand_PrimaryKey {
  brand_id: number; // int32
}

export interface Brand {
  primary_key?: Brand_PrimaryKey;
  name: string;
  description: string;
  image_urls: string[];
}
