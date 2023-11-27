import { Injectable, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { RestService } from "./rest.service";
import { Category } from "./category.model";

@Injectable()
export class ProductRepository implements OnInit {
    private products: Product[] = [];

    constructor(private restService: RestService) {
        this.restService
            .getProducts()
            .subscribe(products => this.products = products); // products bilgileri oluşturulduğu anda servis üzerinden gelen productlar doldurularack
    }
    ngOnInit() {
        
    }

    //Tek bir product a ihtiyaç duyuyosak
    getProduct(id: number): Product {
        return this.products.find(i => i.id === id);
    }

    getProducts(category: Category): Product[] {
        if (category) 
        return this.products.filter(p => p.category == category.name);
        else 
            return this.products;
        
    }
}