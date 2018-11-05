import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product, ProductRating} from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  buy: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  getStarsRating(rating: ProductRating): string {
    return '*'.repeat(rating);
  }

  getAverageRating(): number {
    const sum = this.product.ratings.map(r => <number>r).reduce((r1, r2) => r1 + r2);
    return sum / this.product.ratings.length;
  }

  onBuy() {
    this.buy.emit(this.product);
  }
}
