import {Component, Input, OnInit} from '@angular/core';
import {Product, ProductRating} from '../../models/product.model';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private cartService: CartService) {
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
    this.cartService.addProduct(this.product);
  }
}
