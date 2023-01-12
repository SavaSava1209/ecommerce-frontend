//@ts-nocheck
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, Validators } from '@angular/forms';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
// need to provide type information for JS library
import OktaSignIn from '@okta/okta-signin-widget';
import { AuthService } from 'src/app/services/auth.service';
import config from '../../config/app-config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAdmin: boolean
  isLoggedIn: boolean;

  session: Storage = sessionStorage;

  constructor(public authService: AuthService
  ){ 
    
  }

  ngOnInit(): void {
    // this.authService.isLoggedIn.subscribe((res) => {
    //   this.isLoggedIn = res;
    // })
    // this.authService.isAdmin.subscribe((res) => {
    //   this.isAdmin = res;
    // })
    this.authService.checkLogin().subscribe((res) => {
      if (res.success) {
        this.router.navigate(["/"])
      }
    })
    

  }

  login(user) {
    this.authService.login(user).subscribe((res) => {
      if (res.success) {        
        // this.router.navigate(["/"]) 
      }
    })
    
  }

 
  
}
