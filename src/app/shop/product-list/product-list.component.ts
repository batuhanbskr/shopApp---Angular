import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  selectedProduct: Product = null;

  constructor(
    private cart: Cart, // CARTI INJECT ETTİK
    private router: Router) {

  }

  addProductToCart(product: Product) {
    this.cart.addItem(product);
    this.router.navigateByUrl('cart-detail');
  }

  displayDetails(product: Product) {
    this.selectedProduct = product;
  }

  hideDetails(){
    this.selectedProduct = null;
  }
}
