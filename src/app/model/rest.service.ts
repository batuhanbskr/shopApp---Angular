import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { Category } from './category.model';
import { Order } from './order.model';
import { map } from 'rxjs/operators';
@Injectable()
export class RestService {

  baseUrl: string = "http://localhost:3500/";
  token: string;

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl+'products') // BASE URL ÜZERİNDEN ÜRÜNLERE İSTEK ATTIK
  }

  getCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl+'categories')
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl+'orders', order)
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl+'products' + product.id, product, {
      headers: new HttpHeaders({"Authorization": `Bearer<${this.token}`})
    })
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.baseUrl+'products', product, {
      headers: new HttpHeaders({"Authorization": `Bearer<${this.token}`})
    })
  }

  authentication(username: string, password: string): Observable<boolean>{
    return this.http.post<any>(this.baseUrl+'login', {
      username: username,
      password: password
    }).pipe(map(response => {
      this.token = response.success ? response.token : null;
      console.log(this.token);
      return response.success;
    })) 
  }
}
