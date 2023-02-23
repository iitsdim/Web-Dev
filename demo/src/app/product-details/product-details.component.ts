import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Product} from '../product.model';
import {CartService} from '../cart.service';
import {ProductListService} from "../product-list.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  likedBefore: boolean;
  likeButtonClass: string;

  constructor(
    private route: ActivatedRoute,
    private productListService: ProductListService,
    private cartService: CartService
  ) {
    this.likedBefore = false;
    this.likeButtonClass = "bi bi-hand-thumbs-up";
  }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = this.productListService.getProductId(productIdFromRoute);
    this.likeButtonClass = "bi bi-hand-thumbs-up";
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  deleteProduct(productId: number) {
    this.productListService.deleteProduct(productId);
  }

  likedProduct(product: Product) {
    if (this.likedBefore) {
      product.likes--;
      this.likeButtonClass = "bi bi-hand-thumbs-up";
    } else {
      product.likes++;
      this.likeButtonClass = "bi bi-hand-thumbs-up-fill";
    }
    this.likedBefore = !this.likedBefore;
  }
}
