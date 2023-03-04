import {Component} from '@angular/core';
import { Observable } from 'rxjs';
import {Category} from "../category.model";
import {ProductListService} from "../product-list.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  categories: Category[];

  constructor(
    productService: ProductListService
  ) {
    this.categories = productService.getProductCategories();
  }
}
