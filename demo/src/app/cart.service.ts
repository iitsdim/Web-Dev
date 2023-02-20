import {Injectable} from '@angular/core';
import {Product} from "./product.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) {
  }

  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/json/shipping.json');
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
