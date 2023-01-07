import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  productCategories: ProductCategory[] = [];


  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.ListProductCategory();
  }

  // grab the category from database
  ListProductCategory() {
    this.productService.getProductCategories().subscribe((res) => {
      this.productCategories = res;
    })
  }

}
