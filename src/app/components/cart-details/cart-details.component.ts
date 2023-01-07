import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  totalPrice: number = 0.00;
  totalQuantity: number = 0;
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.ListCartDetails();
  }

  ListCartDetails() {    
    this.cartItems = this.cartService.cartItems

    // subscribe totalprice and totalquantity
    this.cartService.totalPrice.subscribe((price) => this.totalPrice = price)

    this.cartService.totalQuantity.subscribe((quantity) => this.totalQuantity = quantity)

    this.cartService.calculateCartTotal();
  }

  remove(cartItem: CartItem) {
    this.cartService.remove(cartItem);
  }

}
