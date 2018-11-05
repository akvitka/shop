import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private productsService: ProductsService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productsService.getAllProducts();
  }

  onBuy(product: Product) {
    this.cartService.addProduct(product);
  }
}
