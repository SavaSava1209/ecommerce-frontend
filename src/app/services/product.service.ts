import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = "http://localhost:8080/products"
  constructor(private http: HttpClient) { }

  getProductList() : Observable<any> {
    return this.http.get(this.API_URL).pipe(map((res) => {
      console.log(res);
      return res;
    } 
    ))
  }
}
