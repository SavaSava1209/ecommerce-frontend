import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentCategoryId: number = 0;
  previousCategoryId: number = 1;
  currentCategoryName: String | null = null; 
  searchMode: boolean = false;

  pageNumber: number = 1;
  pageSize: number = 10;
  totalElements: number = 10;

  constructor(private productService: ProductService, 
              private route: ActivatedRoute,
              private cartService: CartService
    ) { }

  ngOnInit(): void {    
    this.route.paramMap.subscribe(() => {
      this.productsList();
    });
    
  }

  productsList() {
    this.searchMode = this.route.snapshot.paramMap.has("keyword");

    if (this.searchMode) {      
      this.handleSearchProductsList();

    } else {
      this.handleProductsList();
    }
  }

  handleSearchProductsList() {
    const keyword: string = this.route.snapshot.paramMap.get("keyword")!;
    this.productService.getSearchProducts(keyword).subscribe((res) => {
      this.products = res;
    });
  }

  handleProductsList() {
    // check if there is id in activatedroute 
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has("id");
    
    if (hasCategoryId) {
      // get the id from the route + is required since the get return a string
      this.currentCategoryId = +this.route.snapshot.paramMap.get("id")!;
      this.currentCategoryName = this.route.snapshot.paramMap.get("name");
      this.productService.getProductListByCategoryId(this.currentCategoryId).subscribe((res) => {
        this.products = res;
      })
    } else {
      this.productService.getProductListPagination(this.pageNumber - 1, this.pageSize).subscribe((res) => {
        this.products = res.products;
        this.pageNumber = res.currentPage + 1;
        this.totalElements = res.totalElements;
      })
    }
  }

  addToCart(product: Product) {
    // subscribe the cart servie add to cart 
    this.cartService.addToCart(new CartItem(product))
  }

}
