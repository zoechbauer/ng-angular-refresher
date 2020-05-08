import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
    `
      .container {
        margin: 10px;
      }
    `,
  ],
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = 'A Book';
  isDisabled = true;
  products = [];
  productsSub = new Subscription();

  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      // this.productName = 'A tree';
      this.isDisabled = false;
    }, 3000);
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productsSub = this.productsService.productsChanged.subscribe(() => {
      this.products = this.productsService.getProducts();
    });
  }

  onAddProduct(form: NgForm) {
    console.log(form);
    if (form.value) {
      // this.products.push(form.value.productName);
      this.productsService.addProduct(form.value.productName);
    }
  }

  // onRemoveProduct(product: string) {
  //   // this.products = this.products.filter((prod) => prod !== product);
  //   // this.productsService.deleteProduct(product);
  // }

  ngOnDestroy() {
    this.productsSub.unsubscribe();
  }
}
