import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Purchase } from '../common/purchase';
import { AppConfig } from './app.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private API_URL = AppConfig.API_URL;
  trackingNumber: string = "";
  
  constructor(private http: HttpClient) { }

  placeOrder(purchaseInfo: Purchase): Observable<any> {
    return this.http.post(this.API_URL + "/checkout/purchase", purchaseInfo, { withCredentials: true })
      
  }

}
