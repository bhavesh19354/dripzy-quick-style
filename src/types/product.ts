
export interface ShopifyImageNode {
    url: string;
    altText: string | null;
}
  
export interface ShopifyPrice {
    amount: string;
    currencyCode: string;
}
  
export interface ShopifyVariantNode {
    id: string;
    title: string;
    price: ShopifyPrice;
    image: ShopifyImageNode | null;
    selectedOptions: {
      name: string;
      value: string;
    }[];
}
  
export interface ShopifyProduct {
    id: string;
    title: string;
    descriptionHtml: string;
    vendor: string;
    options: {
      id: string;
      name:string;
      values: string[];
    }[];
    images: { edges: { node: ShopifyImageNode }[] };
    variants: { edges: { node: ShopifyVariantNode }[] };
}

export interface ShopifyVariantDetails {
    id: string;
    title: string;
    price: { amount: string };
    image: { url: string } | null;
    product: {
        id: string;
        title: string;
        vendor: string;
    };
}
