import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  //!to suspend strict null and undefined check for a property
  product!: Product;

  constructor(private router: ActivatedRoute, 
              private productService: ProductService,
              private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(() => {
      this.handleProductDetails()
    })
  }

  handleProductDetails() {    
    const id = +this.router.snapshot.paramMap.get('id')!;
    this.productService.getProductDetails(id).subscribe((res) => {
      this.product = res;
    })
  }

  addToCart() {
    this.cartService.addToCart(new CartItem(this.product))
  }
}
