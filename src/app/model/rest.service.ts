import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { Category } from './category.module';

@Injectable()
export class RestService {

  baseUrl: string = "http://localhost:3500/";

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+'products') // BASE URL ÜZERİNDEN ÜRÜNLERE İSTEK ATTIK
  }

  getCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl+'categories')
  }
}
