import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import {HttpClientModule} from "@angular/common/http";
import { ShippingComponent } from './shipping/shipping.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ShareButtons, ShareButtonsModule} from "ngx-sharebuttons/buttons";
import {ShareIconsModule} from "ngx-sharebuttons/icons";
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: CategoryListComponent},
      {path: 'category/:categoryId', component: ProductListComponent},
      {path: 'products', component: ProductListComponent},
      {path: 'products/:productId', component: ProductDetailsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'shipping', component: ShippingComponent},
    ]),
    ReactiveFormsModule,
    ShareButtonsModule,
    ShareIconsModule,
  ],
  providers: [],
  exports: [
    TopBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
