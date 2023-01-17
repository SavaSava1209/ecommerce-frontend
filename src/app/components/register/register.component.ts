//@ts-nocheck
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLoggedIn: boolean = false;
  errorMessage: string = ""


  constructor(private authService: AuthService,
              private router: Router
  ) { }

  ngOnInit(): void {

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
