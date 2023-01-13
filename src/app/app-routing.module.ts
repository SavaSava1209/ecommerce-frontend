import { Injector, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { OktaAuthGuard,  OktaCallbackComponent } from '@okta/okta-angular'
import { OktaAuth } from '@okta/okta-auth-js';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { RegisterComponent } from './register/register.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminOrderHistoryComponent } from './components/admin-order-history/admin-order-history.component';
import { AppGuard } from './app.guard';
import { ManagementComponent } from './components/management/management.component';
import { CheckoutGuard } from './checkout.guard';
import { AppComponent } from './app.component';

const sendToLogin = (oktaAuth: OktaAuth, injector: Injector) => {
    const router = injector.get(Router);
    router.navigate(["/login"])
}

const routes: Routes = [   
    {   
        path: 'addProduct',
        component: AddProductComponent,       
    },
    
    {   
        path: 'management',
        component: ManagementComponent,    
        canActivate: [AppGuard]   
    },
   
    {   
        path: 'order-history-admin',
        component: AdminOrderHistoryComponent,    
        canActivate: [AppGuard]   
    },
    {   
        path: 'register',
        component: RegisterComponent,       
    }, 
    {   
        path: 'order-history',
        component: OrderHistoryComponent,
    }, 
    {   
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [CheckoutGuard]
    }, 
    {
        path: 'login',
        component: LoginComponent
    }, 
    {
        path: 'cart-details',
        component: CartDetailsComponent
    }, 
    {
        path: 'products/:id',
        component: ProductDetailsComponent
    },  
    {
        path: 'search/:keyword',
        component: ProductListComponent
    },   
    {
        path: 'category/:id/:name',
        component: ProductListComponent
    },
    {
        path: 'category',
        component: ProductListComponent
    },
    {
        path: 'products/search/:name',
        component: ProductListComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    }, 
    
    {
        path: '**',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    
    
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }