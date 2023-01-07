import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

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

  constructor(private fb: FormBuilder, 
              private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.checkoutFormGroup = this.fb.group({
      customer: this.fb.group({
        firstName: '',
        lastName: '',
        email: ''
      }), 
      shipping: this.fb.group({
        country: '',
        street: '',
        city: '',
        state: '',
        zipCode: null
      }),
      creditCard: this.fb.group({
        cardType:'',
        nameOnCard: '',
        cardNumber: '',
        securityCode: '',
        expirationMonth: '',
        expirationYear: ''
      })
    }) 
    this.reviewCartDetail();
    
  }

  reviewCartDetail() {
    this.cartService.totalPrice.subscribe((price) => this.totalPrice = price)
    this.cartService.totalQuantity.subscribe((quantity) => this.totalQuantities = quantity)
  }

  onSubmit() {
    console.log(this.checkoutFormGroup.get("customer")?.value);
    console.log(this.checkoutFormGroup.get("shipping")?.value)
  }

}
