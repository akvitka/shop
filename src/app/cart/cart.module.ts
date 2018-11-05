import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './components/cart/cart.component';
import {CartService} from './services/cart.service';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    CartService
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule {
}
