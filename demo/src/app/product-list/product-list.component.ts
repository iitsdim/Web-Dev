import {Component} from '@angular/core';
import {Product} from "../product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[];

  constructor() {
    this.products = [
      {'name': 'BigMac', 'description': 'BIG and TASTY', 'rating': 5}
    ];
  }

  share() {
    window.alert('The product has been shared!');
  }
}
