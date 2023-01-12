//@ts-nocheck
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  isProductAdded: boolean = false;
  productForm
  categories

  

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory() {
    this.productService.getProductCategories().subscribe((res) => {
      this.categories = res;
    })
  }

  addProduct(productForm) {
    this.productService.addProduct(productForm.value).subscribe((res) => {
      this.isProductAdd = res.success;
      if (res.success) {
        this.isProductAdded = true;
        
      }
      productForm.resetForm()
    })
  }

}
