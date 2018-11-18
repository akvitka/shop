import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {ProductComponent} from './components/product/product.component';
import {ProductsService} from './services/products.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
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
