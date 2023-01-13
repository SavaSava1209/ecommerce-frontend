import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService }  from './services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class CheckoutGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    canActivate(next: ActivatedRouteSnapshot, state:  RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isLoggedIn
            .pipe((isLoggedIn) => {                
                if (!isLoggedIn) {
                    // alert('Please log in')
                }
                return isLoggedIn;
            })
    }
}