import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = ['A Book'];
  productsChanged = new Subject();

  constructor() {}

  addProduct(productName: string) {
    this.products.push(productName);
    this.productsChanged.next();
  }

  getProducts() {
    return [...this.products];
  }

  deleteProduct(productName: string) {
    this.products = this.products.filter((prod) => prod !== productName);
    this.productsChanged.next();
  }
}
