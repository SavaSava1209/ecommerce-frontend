import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { AuthService } from 'src/app/services/auth.service';
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

  isLoggedIn: boolean = false;

  constructor(private cartService: CartService,
              private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.ListCartDetails();
    this.authService.isLoggedIn.subscribe((res) => {
      this.isLoggedIn = res;
    })
  }

  ListCartDetails() {    
    this.cartItems = this.cartService.cartItems

    // subscribe totalprice and totalquantity
    this.cartService.totalPrice.subscribe((price) => this.totalPrice = Number(price.toFixed(2)))

    this.cartService.totalQuantity.subscribe((quantity) => this.totalQuantity = quantity)

    this.cartService.calculateCartTotal();
  }

  remove(cartItem: CartItem) {
    this.cartService.remove(cartItem);
  }

  warning() {
    
    if (!this.isLoggedIn) {
      alert("Please log in to place an order.")
    }
   
    
  }

}
