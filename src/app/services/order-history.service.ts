import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { OrderHistory } from '../common/order-history';
import { AppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class OrderHistoryService {
  private API_URL = AppConfig.API_URL; 

  session: Storage = sessionStorage;
  
  constructor(private http: HttpClient) { }



  getOrderHistory(email: string): Observable<any> {
    // call rest api
    return this.http.get(this.API_URL + `/orders?email=${email}`, { withCredentials: true})
  }

  getAdminOrders(): Observable<any> {
    return this.http.get(this.API_URL + "/orders/admin", {withCredentials: true})
    .pipe(map((res) => {
      return res;
    }))
  }


}
