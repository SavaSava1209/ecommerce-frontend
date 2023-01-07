import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = []

  // emit/publish the value to cart-status comp
  totalPrice: Subject<number> = new BehaviorSubject(0);
  totalQuantity: Subject<number> = new BehaviorSubject(0);

  constructor() {

  }


  addToCart(cartItem: CartItem) {
    let isCartItemExisted = false;
    let existedItem = undefined;
    if (this.cartItems.length > 0) {
      
      existedItem = this.cartItems.find(currentItem => currentItem.id === cartItem.id)      
    }
    isCartItemExisted = existedItem == undefined? false: true;
     // if found existed item
     if (isCartItemExisted) {
      // update the cartItem in the arr
      existedItem!.quantity += 1;
    } else {
      this.cartItems.push(cartItem);
    }
    
    this.calculateCartTotal() 

  }
  calculateCartTotal() {
    let totalPriceValue:number = 0
    let totalQuantityValue: number = 0;    
    
    for (let currrentCartItem of this.cartItems){      
      totalPriceValue += currrentCartItem.quantity * currrentCartItem.unitPrice;
      totalQuantityValue += currrentCartItem.quantity;      
      
    }
    totalPriceValue.toFixed(2);
    // emit the value to the subscriber 
    // publish the new values ... all subscribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue)

  }
  
  remove(cartItem: CartItem) {
    const itemIdx = this.cartItems.findIndex(item => item.id = cartItem.id);
    
    if (itemIdx > -1) {
      this.cartItems.splice(itemIdx, 1);
    }

    this.calculateCartTotal()
  }
}
