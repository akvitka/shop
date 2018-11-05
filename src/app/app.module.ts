import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './products/components/product/product.component';
import {ProductsService} from './products/services/products.service';
import {CartService} from './cart/services/cart.service';
import {ProductsListComponent} from './products/components/products-list/products-list.component';
import {CartComponent} from './cart/components/cart/cart.component';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
