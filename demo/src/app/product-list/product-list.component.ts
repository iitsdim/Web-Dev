import {Component, OnInit} from '@angular/core';
import {Product} from '../product.model';
import * as data from "../../assets/json/products.json"
import {ProductListService} from "../product-list.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[];

  constructor(
    private productService: ProductListService
  ) {
    this.products = this.productService.getProductList()
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
