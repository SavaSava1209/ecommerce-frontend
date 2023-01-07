import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { AppConfig } from './app.config';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = AppConfig.API_URL;

  constructor(private http: HttpClient) { }

  getProducts(url: string): Observable<any> {
    return this.http.get(url)
      .pipe(map((res) => {        
        return res;
      } 
    ))
  }

  getProductListPagination(pageNumber: number, pageSize: number) : Observable<any> {
    const url = this.API_URL + `/products?page=${pageNumber}&size=${pageSize}`
    return this.getProducts(url);
  }

  getProductList() : Observable<any> {
    const url = this.API_URL + "/products"
    return this.getProducts(url);
  }

  getProductListByCategoryId(id: number): Observable<any> {
    const url = this.API_URL + `/product-category/${id}`
    return this.getProducts(url);
  }

  getProductCategories(): Observable<any> {
    const url = this.API_URL + "/product-category"
    return this.getProducts(url);
    
  }

  getSearchProducts(keyword: string): Observable<any> {
    const url = this.API_URL + `/products/search/${keyword}`
    return this.getProducts(url);   
  }

  getProductDetails(id: number): Observable<Product> {
    const url = this.API_URL + `/products/${id}`
    return this.getProducts(url);
  }


}
