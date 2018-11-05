import {Injectable} from '@angular/core';
import {Product} from '../../products/models/product.model';

@Injectable()
export class CartService {
  private products: Array<Product> = [];

  constructor() {
  }

  addProduct(product: Product) {
    this.products.push(product);
    console.log(`Added item ${this.products.length}: product "${product.name}"`);
  }

  getProducts(): Array<Product> {
    return this.products;
  }

}
