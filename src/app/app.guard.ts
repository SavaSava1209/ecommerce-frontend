import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService }  from './services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AppGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    canActivate(next: ActivatedRouteSnapshot, state:  RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAdmin
            .pipe((isAdmin) => {
                
                if (!isAdmin) {
                    this.router.navigate(['/login']);
                }
                return isAdmin;
            })
    }
}