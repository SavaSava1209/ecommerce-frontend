import { Component, OnInit } from '@angular/core';
import { OrderHistory } from 'src/app/common/order-history';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderHistory: OrderHistory[] = [];

  isAdmin: boolean = false;

  session: Storage = sessionStorage;

  constructor(private orderHistoryService: OrderHistoryService) { }

  ngOnInit(): void {
    this.getOrderHistoryList()
  }

  getOrderHistoryList() {
    const email = JSON.parse(this.session.getItem("userEmail")!)
    this.orderHistoryService.getOrderHistory(email).subscribe((res) => {
      this.orderHistory = res;
      console.log(res)
    })
  }

 
}
