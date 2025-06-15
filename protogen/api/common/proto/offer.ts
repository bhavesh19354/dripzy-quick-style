
export interface Offer_PrimaryKey {
  offer_id: string;
}

export interface MultiBuyOffer {
  min_items: string; // int64
  free_items: string; // int64
}

export interface FlatDiscountOffer {
  min_items: string; // int64
  discount_amount_micros: number; // double
}

export interface PercentageOffer {
  min_items: string; // int64
  discount_percentage: number; // double
}

export interface FixedPriceOffer {
  min_items: string; // int64
  fixed_discounted_price_micros: number; // double
}

export interface Offer {
  primary_key?: Offer_PrimaryKey;
  description: string;
  is_active: boolean;
  multi_buy_offer?: MultiBuyOffer;
  flat_discount_offer?: FlatDiscountOffer;
  percentage_offer?: PercentageOffer;
  fixed_price_offer?: FixedPriceOffer;
  priority: string; // int64
  start_date: string;
  end_date: string;
}
