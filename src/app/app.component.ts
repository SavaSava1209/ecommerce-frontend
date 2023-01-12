import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerce-website';

  isAdmin: boolean = false;


  constructor(public authService: AuthService) {  
  }
  ngOnInit() {
    this.authService.checkLogin().subscribe(res => {
      console.log(res)
    })
    // this.authService.isAdmin.subscribe((res) => {
    //   this.isAdmin = res;
    // })
    
  }
  checkIsAdmin() {
    this.authService.checkIsAdmin().subscribe((res) => {
      this.isAdmin = res;
    })
  }
 
}
