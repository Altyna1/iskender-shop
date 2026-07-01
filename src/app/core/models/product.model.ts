export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  currency: string;
  inStock: boolean;
  badge?: string;
  isFavorite?: boolean;
  quantity?: number;

  stockText?: string;
  hasSet?: boolean;
}