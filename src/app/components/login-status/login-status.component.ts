//@ts-nocheck
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { CookieStorage, OktaAuth } from '@okta/okta-auth-js';
import { AuthService } from 'src/app/services/auth.service';


//@ts-nocheck
@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  isLoggedIn: boolean = false;
  fullName: string = '';

  session: Storage = sessionStorage;


  constructor(private authService: AuthService,
              private router: Router
  ) { }

  ngOnInit(): void {   
    this.authService.isLoggedIn.subscribe((res) => {
      this.isLoggedIn = res;      
    }) 
  }  
  
  logout() {
    this.authService.logout().subscribe((res) => {
      if (res.success) {
        this.isLoggedIn = false;
        this.fullName = ""
        this.session.removeItem("userEmail")
        this.router.navigate(["/"])
      }
     
      
    })
  }

  getUserDetails() {
    this.authService.getUserDetail().subscribe((res) => {
     // this.fullName = res.userName;
    //  console.log("login status", res)
      const email = JSON.stringify(res.email)
      this.fullName = res.firstName
      this.session.setItem("userEmail", email)
    })
  }
  
}
