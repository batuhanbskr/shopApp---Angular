import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { ShopComponent } from './shop.component';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from "@angular/router";

@NgModule({
    imports:  [ModelModule, BrowserModule, FormsModule, RouterModule],
    providers: [],
    declarations: [
      ShopComponent,
      NavbarComponent,
      CartSummaryComponent,
      CartDetailComponent,
      CheckoutComponent
    ],
    exports: [ShopComponent, CartDetailComponent, CheckoutComponent]
})

export class ShopModule {}