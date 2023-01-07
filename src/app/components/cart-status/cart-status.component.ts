import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css']
})
export class CartStatusComponent implements OnInit {
  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.updateCartStatus()
  }
  updateCartStatus() {
    // subscribe total price in cart service 
    this.cartService.totalPrice.subscribe((res) => {    
      this.totalPrice = Number(res.toFixed(2));
      // this.totalPrice = res; 164.890000000000001
    })
    // subscribe total quantity in cart service 
    this.cartService.totalQuantity.subscribe((res) => {
      this.totalQuantity = res;
    })
  }

}
