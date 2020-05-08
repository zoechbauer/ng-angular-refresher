import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  productName = 'A Book';
  isDisabled = true;
  products = ['A Book', 'A Tree'];

  constructor() {
    setTimeout(() => {
      // this.productName = 'A tree';
      this.isDisabled = false;
    }, 3000);
  }

  ngOnInit(): void {}

  onAddProduct(form: NgForm) {
    console.log(form);
    if (form.value) {
      // this.products.push(form.controls['productName'].value);
      this.products.push(form.value.productName);
    }
  }

  onRemoveProduct(product: string) {
    this.products = this.products.filter((prod) => prod !== product);
  }
}
