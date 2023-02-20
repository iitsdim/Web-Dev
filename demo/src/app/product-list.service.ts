import {Injectable} from '@angular/core';
import {Product} from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  products: Product[] = [
    {
      "name": "BigMac",
      "description": "BIG and TASTY",
      "rating": 5,
      "id": 1
    },
    {
      "name": "Menu4U",
      "description": "MENU FOR U DARLING",
      "rating": 3,
      "id": 2
    }
  ];

  constructor() {
  }

  addToCart(product: Product) {
    this.products.push(product);
  }

  getProductList() {
    return this.products;
  }

  getProductId(id: number) {
    return this.products.find(product => product.id === id)
  }
}
