import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
import { Order } from 'src/app/common/order';
import { OrderItem } from 'src/app/common/order-item';
import { Purchase } from 'src/app/common/purchase';
import { CartService } from 'src/app/services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  //@ts-ignore
  checkoutFormGroup: FormGroup;

  totalPrice: number = 0;
  totalQuantities: number = 0;

  session: Storage = sessionStorage

  constructor(private fb: FormBuilder, 
              private cartService: CartService,
              private checkoutService: CheckoutService, 
              private route: Router
    ) { }

  ngOnInit(): void {
    const email = JSON.parse(this.session.getItem("userEmail")!);
    this.checkoutFormGroup = this.fb.group({
      customer: this.fb.group({
        firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
        email: new FormControl(email, [Validators.required, Validators.email])
      }), 
      shipping: this.fb.group({
        country: new FormControl('', [Validators.required, Validators.minLength(2)]),
        street: new FormControl('', [Validators.required, Validators.minLength(2)]),
        city: new FormControl('', [Validators.required, Validators.minLength(2)]),
        state: new FormControl('', [Validators.required, Validators.minLength(2)]),
        zipCode: new FormControl('', [Validators.required, Validators.minLength(2)])
      }),
    }) 
    this.reviewCartDetail();
    
  }

  reviewCartDetail() {
    this.cartService.totalPrice.subscribe((price) => this.totalPrice = price)
    this.cartService.totalQuantity.subscribe((quantity) => this.totalQuantities = quantity)
  }

  onSubmit() {
    // check if the form is valid
    if (this.checkoutFormGroup.invalid) {
      this.checkoutFormGroup.markAllAsTouched();
      console.log("invalid")
      return ;
    }
    let order = new Order();
    order.totalPrice = this.totalPrice;
    order.totalQuantity = this.totalQuantities;

    let cartItems = this.cartService.cartItems;
    
    let orderItems: OrderItem[] = cartItems.map(item => new OrderItem(item));
    
    let purchase: Purchase = new Purchase();
   
    purchase.shippingAddress = this.checkoutFormGroup.value["shipping"];
    purchase.customer = this.checkoutFormGroup.value["customer"];
    purchase.order = order;
    purchase.orderItems = orderItems;

    //call checkout service 
    this.checkoutService.placeOrder(purchase).subscribe({
      next: 
        res => {
          alert(`your order has been placed.\n Order number is ${res.orderTrackingNumber}`)
          this.resetCart();
        },
      error: 
        err => alert(`There was an error. ${err.message}`)
    })
  }

  resetCart() {
    // reset cart 
    this.cartService.cartItems = [];
    this.cartService.totalPrice.next(0);
    this.cartService.totalQuantity.next(0);

    // reset form
    this.checkoutFormGroup.reset();

    // navigate to product
    this.route.navigateByUrl('/products')
  }

 

}
