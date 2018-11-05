export interface Product {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
  reviews?: Array<string>;
  ratings?: Array<ProductRating>;
}

export class ProductModel implements Product {
  category: ProductCategory;
  description: string;
  isAvailable: boolean;
  name: string;
  price: number;
  ratings?: Array<ProductRating>;
  reviews?: Array<string>;
}

export enum ProductCategory {
  ELECTRONICS= 'Electronics',
  BOOKS = 'Books',
  FOOD = 'Food',
  DRINKS = 'Drinks'
}

export type ProductRating = 1 | 2 | 3 | 4 | 5;
