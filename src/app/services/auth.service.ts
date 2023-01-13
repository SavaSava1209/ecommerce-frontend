//@ts-nocheck
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { AppComponent } from '../app.component';
import { LoginStatusComponent } from '../components/login-status/login-status.component';
import { ManagementComponent } from '../components/management/management.component';
import { AppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = AppConfig.API_URL;

  isLoggedIn: Subject<boolean> = new BehaviorSubject<boolean>(false);
  isAdmin: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient,
              private router: Router
  ) { }

  login(user) : Observable<any> {
    let params = new HttpParams();
    params = params.append("username", user.username);
    params = params.append("password", user.password);
    
    return this.http.post(this.API_URL + "/login",  params, { withCredentials: true })
      .pipe( map((res) => {       
        this.isLoggedIn.next(res.success)     
        console.log(res)  
        if (this.isLoggedIn) {          
          this.router.navigate(["/"]);
        } 
        return res;
      }))
  }

  register(user): Observable<any> {
    return this.http.post(this.API_URL + "/auth/register", user)
      .pipe(map((res) => {        
        this.isLoggedIn.next(res.success)
        return res;
      }))
  }

  checkLogin() : Observable<any> {
    // return this.http.checke
    return this.http.get(this.API_URL + "/auth/checkLogin", {withCredentials: true})
      .pipe( map(res => {
        this.isLoggedIn.next(res.success);
        return res;
    }))

  }

  logout(): Observable<any> {
    return this.http.post(this.API_URL + "/logout", {}, {withCredentials: true})
      .pipe( map(res => {
        this.isLoggedIn.next(false);
        this.isAdmin.next(false)
        return res;
      }))

  }

  getUserDetail(): Observable<any> {
    return this.http.get(this.API_URL + "/auth/user", { withCredentials: true })
      .pipe( map(res => {
        return res;
      }))
  }

  checkIsAdmin(): Observable<any> {
    return this.http.get(this.API_URL + "/auth/isAdmin", { withCredentials: true })
      .pipe(map(res => {
        console.log("auth checkIsAdmin" + res)
        this.isAdmin.next(res);
        return res;
      }))
  }
}
