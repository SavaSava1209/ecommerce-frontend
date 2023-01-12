//@ts-nocheck
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLoggedIn: boolean = false;
  errorMessage: string = ""
  session: Storage = sessionStorage

  constructor(private authService: AuthService,
              private router: Router

  ) { }

  ngOnInit(): void {
    // this.authService.isLoggedIn.subscribe((res) => {
    //   this.isLoggedIn = res;
    // })
  }

  register(user) {    
    this.authService.register(user).subscribe((res) => {      
      if (res.success) {
        this.router.navigate(['/'])
      } else {
        this.errorMessage = res.message;
      }
    })
  }
}
