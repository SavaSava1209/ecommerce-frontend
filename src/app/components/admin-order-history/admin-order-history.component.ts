import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/common/order';
import { OrderHistoryService } from 'src/app/services/order-history.service';

@Component({
  selector: 'app-admin-order-history',
  templateUrl: './admin-order-history.component.html',
  styleUrls: ['./admin-order-history.component.css']
})
export class AdminOrderHistoryComponent implements OnInit {
  allOrders: any =  []
  constructor(private orderHistoryService: OrderHistoryService) { }

  ngOnInit(): void {
    this.handleAllOrders();
  }

  handleAllOrders() {
    this.orderHistoryService.getAdminOrders().subscribe((res) => {
      this.allOrders = res;
      console.log(res)
    })
  }

}
