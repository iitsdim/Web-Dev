import {Component, OnInit} from '@angular/core';
import {Product} from '../product.model';
import * as data from "../../assets/json/products.json"
import {ProductListService} from "../product-list.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductListService
  ) {
    this.products = this.productService.getProductList()
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));
    this.products = this.productService.getProductsByCategory(categoryIdFromRoute);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
