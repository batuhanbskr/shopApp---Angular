import { Injectable, OnInit } from "@angular/core";
import { RestService } from "./rest.service";
import { Category } from "./category.module";

@Injectable()
export class CategoryRepository implements OnInit {
    private categories: Category[] = [];

    constructor(private restService: RestService) {
        this.restService
            .getCategories()
            .subscribe(categories => this.categories = categories); // products bilgileri oluşturulduğu anda servis üzerinden gelen productlar doldurularack
    }
    ngOnInit() {
    
    }

    //Tek bir product a ihtiyaç duyuyosak
    getCategory(id: number): Category {
        return this.categories.find(i => i.id === id);
    }

    getCategories(): Category[] {
        return this.categories;
    }
}