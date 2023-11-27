import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { ShopComponent } from './shop.component';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
    imports:  [ModelModule, BrowserModule, FormsModule],
    providers: [],
    declarations: [
      ShopComponent,
      NavbarComponent,
      CartSummaryComponent
    ],
    exports: [ShopComponent]
})

export class ShopModule {}