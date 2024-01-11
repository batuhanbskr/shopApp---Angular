import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productRepository: ProductRepository){}
  
  ngOnInit() {
    throw new Error('Method not implemented.');
  }

  getProducts(): Product[]{
    return this.productRepository.getProducts();
  }


  deleteProduct(product: Product){}
}
