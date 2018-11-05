import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {ProductComponent} from './components/product/product.component';
import {ProductsService} from './services/products.service';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProductsService
  ],
  exports: [
    ProductsListComponent
  ]
})
export class ProductsModule {
}
