import { Injectable } from '@angular/core';
import {Product, ProductCategory, ProductModel} from '../models/product.model';

@Injectable()
export class ProductsService {
  private products: Array<Product>;

  constructor() {
    const product1 = new ProductModel();
    product1.name = 'Product1';
    product1.description = 'Description of product one';
    product1.price = 123;
    product1.category = ProductCategory.DRINKS;
    product1.isAvailable = true;
    product1.reviews = ['Review on product one'];
    product1.ratings = [];

    const product2 = new ProductModel();
    product2.name = 'Product2';
    product2.description = 'Description of product two';
    product2.price = 321;
    product2.category = ProductCategory.ELECTRONICS;
    product2.isAvailable = true;
    product2.reviews = ['First review on product two', 'Second review on product two'];
    product2.ratings = [3, 5, 4];

    const product3 = new ProductModel();
    product3.name = 'Product3';
    product3.description = 'Description of product three';
    product3.price = 42;
    product3.category = ProductCategory.BOOKS;
    product3.isAvailable = true;
    product3.reviews = [];
    product3.ratings = [4];

    this.products = [product1, product2, product3];
  }

  getAllProducts(): Array<Product> {
    return this.products;
  }
}
