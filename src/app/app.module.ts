import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular'
import { OktaAuth } from '@okta/okta-auth-js';

import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { RegisterComponent } from './register/register.component';
import { ManagementComponent } from './components/management/management.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminOrderHistoryComponent } from './components/admin-order-history/admin-order-history.component'
import { AppGuard } from './app.guard';
import { CheckoutGuard } from './checkout.guard';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    LoginStatusComponent,
    OrderHistoryComponent,
    RegisterComponent,
    ManagementComponent,
    AddProductComponent,
    AdminOrderHistoryComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AppGuard,
    CheckoutGuard
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
