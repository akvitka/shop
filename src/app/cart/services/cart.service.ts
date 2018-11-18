import {Injectable} from '@angular/core';
import {Product} from '../../products/models/product.model';
import {CartItem} from '../models/cart-item.model';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';

@Injectable()
export class CartService {
  private productItems: Array<CartItem> = [];

  private productsUpdated = new Subject<void>();

  private total: number;
  private count: number;

  public productsUpdated$ = this.productsUpdated.asObservable().pipe(tap(() => {
    this.updateCount();
    this.updateTotal();
  }));

  constructor() {
    this.total = 0;
    this.count = 0;
  }

  addProduct(product: Product, quantity?: number) {
    const found = this.findItem(product.name);
    const addedQuantity = isNullOrUndefined(quantity) ? 1 : quantity;
    if (found) {
      found.quantity += addedQuantity;
    } else {
      this.productItems.push(new CartItem(product, addedQuantity));
    }
    console.log(`Added item ${this.getCount()}: product "${product.name}"`);
    this.productsUpdated.next();
  }

  getProductItems(): Array<CartItem> {
    return this.productItems;
  }

  getTotal(): number {
    return this.total;
  }

  getCount() {
    return this.count;
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

  removeAll() {
    this.productItems = [];
    this.productsUpdated.next();
  }

  private findItem(name: string): CartItem {
    return this.productItems.find((i) => i.product.name === name);
  }

  private updateCount() {
    this.count = this.productItems.map(i => i.quantity).reduce((p1, p2) => p1 + p2, 0);
  }

  private updateTotal() {
    this.total = this.productItems.map(i => i.product.price * i.quantity).reduce((p1, p2) => p1 + p2, 0);
  }
}
