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
  constructor(public name: string,
              public description: string,
              public price: number,
              public category: ProductCategory,
              public isAvailable: boolean,
              public reviews: Array<string>,
              public ratings: Array<ProductRating>) {
  }
}

export enum ProductCategory {
  ELECTRONICS = 'Electronics',
  BOOKS = 'Books',
  FOOD = 'Food',
  DRINKS = 'Drinks'
}

export type ProductRating = 1 | 2 | 3 | 4 | 5;
