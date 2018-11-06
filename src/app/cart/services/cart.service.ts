import {Injectable} from '@angular/core';
import {Product} from '../../products/models/product.model';
import {CartItem} from '../models/cart-item.model';
import {Subject} from 'rxjs';

@Injectable()
export class CartService {
  private productItems: Array<CartItem> = [];

  private productsUpdated = new Subject<void>();

  public productsUpdated$ = this.productsUpdated.asObservable();

  constructor() {
  }

  addProduct(product: Product) {
    const found = this.findItem(product.name);
    if (found) {
      found.quantity++;
    } else {
      this.productItems.push(new CartItem(product, 1));
    }
    console.log(`Added item ${this.getCount()}: product "${product.name}"`);
    this.productsUpdated.next();
  }

  getProductItems(): Array<CartItem> {
    return this.productItems;
  }

  getTotal(): number {
    return this.productItems.map(i => i.product.price * i.quantity).reduce((p1, p2) => p1 + p2, 0);
  }

  getCount() {
    return this.productItems.map(i => i.quantity).reduce((p1, p2) => p1 + p2, 0);
  }

  removeItem(product: Product) {
    const found = this.findItem(product.name);
    if (found) {
      this.productItems = this.productItems.filter((i) => i.product.name !== product.name);
      this.productsUpdated.next();
    }
  }

  incrementQuantity(product: Product) {
    const found = this.findItem(product.name);
    if (found) {
      found.quantity++;
      this.productsUpdated.next();
    }
  }

  decrementQuantity(product: Product) {
    const found = this.findItem(product.name);
    if (found) {
      if (found.quantity > 1) {
        found.quantity--;
      } else {
        this.removeItem(product);
      }
      this.productsUpdated.next();
    }
  }

  private findItem(name: string): CartItem {
    return this.productItems.find((i) => i.product.name === name);
  }
}
