import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartItem} from '../../models/cart-item.model';
import {Product} from '../../../products/models/product.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit, OnDestroy {

  private productsUpdateSubscription: Subscription;

  constructor(private cartService: CartService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.productsUpdateSubscription = this.cartService.productsUpdated$.subscribe(() => {
      this.cd.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.productsUpdateSubscription.unsubscribe();
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
