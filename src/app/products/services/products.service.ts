import {Injectable} from '@angular/core';
import {Product, ProductCategory, ProductModel} from '../models/product.model';
import {isNullOrUndefined} from 'util';

@Injectable()
export class ProductsService {
  private products: Array<Product>;

  constructor() {
    const product1 = new ProductModel('Product1', 'Description of product one', 123, ProductCategory.DRINKS,
      true, ['Review on product one'], []);

    const product2 = new ProductModel('Product2', 'Description of product two', 321, ProductCategory.ELECTRONICS,
      false, ['First review on product two', 'Second review on product two'], [3, 5, 4]);

    const product3 = new ProductModel('Product3', 'Description of product three', 42, ProductCategory.BOOKS,
      true, [], [4]);

    this.products = [product1, product2, product3];
  }

  getAllProducts(): Array<Product> {
    return this.products;
  }

  getAverageRating(product: Product): number {
    if (isNullOrUndefined(product.ratings) || product.ratings.length === 0) {
      return undefined;
    }
    const sum = product.ratings.map(r => <number>r).reduce((r1, r2) => r1 + r2);
    return sum / product.ratings.length;
  }

}
