import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
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

  getProducts(): Array<Product> {
    return this.cartService.getProducts();
  }

  getTotal(): number {
    return this.cartService.getProducts().map(p => p.price).reduce((p1, p2) => p1 + p2, 0);
  }
}
