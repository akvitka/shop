import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../products/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {

  @Input()
  product: Product;

  @Input()
  quantity: number;

  @Output()
  remove: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  increment: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  decrement: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onRemove() {
    this.remove.emit(this.product);
  }

  onIncrement() {
    this.increment.emit(this.product);
  }

  onDecrement() {
    this.decrement.emit(this.product);
  }
}
