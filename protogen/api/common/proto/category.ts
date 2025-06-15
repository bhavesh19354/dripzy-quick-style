
export interface Category {
  category_id: string; // int64
  name: string;
  image_url: string;
  subcategories: Category[];
}

export interface CategorySet {
  categories: Category[];
}
