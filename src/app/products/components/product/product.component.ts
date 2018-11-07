import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product, ProductRating} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';

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

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
  }

  getStarsRating(rating: ProductRating): string {
    return '*'.repeat(rating);
  }

  getAverageRating(): number {
    return this.productsService.getAverageRating(this.product);
  }

  onBuy() {
    this.buy.emit(this.product);
  }
}
