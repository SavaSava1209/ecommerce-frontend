import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  isAdmin: boolean = false
  constructor(private orderHistoryService: OrderHistoryService,
              private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.isAdmin.subscribe((res) => {
      this.isAdmin = res;
    })
    
  }

  
}
