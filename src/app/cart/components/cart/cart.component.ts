import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartItem} from '../../models/cart-item.model';
import {Product} from '../../../products/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  getProductItems(): Array<CartItem> {
    return this.cartService.getProductItems();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  getCount() {
    return this.cartService.getCount();
  }

  onRemove(product: Product) {
    this.cartService.removeItem(product);
  }

  onIncrement(product: Product) {
    this.cartService.incrementQuantity(product);
  }

  onDecrement(product: Product) {
    this.cartService.decrementQuantity(product);
  }
}
