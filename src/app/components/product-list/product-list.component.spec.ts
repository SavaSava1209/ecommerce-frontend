// import { HttpClient, HttpHandler } from '@angular/common/http';
// import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
// import { ActivatedRoute, convertToParamMap, RouteConfigLoadEnd } from '@angular/router';
// import { async, Observable, of, Subject } from 'rxjs';
// import { Product } from 'src/app/common/product';
// import { AuthService } from 'src/app/services/auth.service';
// import { ProductService } from 'src/app/services/product.service';

// import { ProductListComponent } from './product-list.component';

// describe('ProductListComponent', () => {
//     let PRODUCTS: Product[];
//     let mockProductService: any;
//     let mockAuthService: any
//     let mockActivatedRoute: any;
//     let component: ProductListComponent;
//     let fixture: ComponentFixture<ProductListComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ProductListComponent ],
//       providers: [
//         { provide: ProductService, useValue: mockProductService },
//         { provide: ActivatedRoute, useValue: mockActivatedRoute },
//         { provide: AuthService, useValue: mockAuthService }
//     ]

//     })
//     .compileComponents();

//     // mockAuthService = jasmine.createSpyObj({}, { isAdmin: new Subject() })
//     // mockProductService = jasmine.createSpyObj(['getProductList', 'getProducts', 'deleteProduct'])
//     // mockActivatedRoute = {  snapshot: { paramsMap: { get: (id: number) => { id: 1 } }}, 
//     //                         paramsMap: { get: (id: number) => { id: 1 } }
// };

//     PRODUCTS = [
//       {
//         id: 1, 
//         sku: "test1",
//         name: "test1",
//         description: "test1",
//         unitPrice: 1,
//         imageUrl: "test1",
//         active: true,
//         unitsInStock: 1,
//         category: 1,
//         dateCreated: new Date(),
//         lastUpdated: new Date()
//       },
//       {
//         id: 2, 
//         sku: "test2",
//         name: "test2",
//         description: "test2",
//         unitPrice: 2,
//         imageUrl: "test2",
//         active: true,
//         unitsInStock: 2,
//         category: 2,
//         dateCreated: new Date(),
//         lastUpdated: new Date()
//       }
//     ]

//     fixture = TestBed.createComponent(ProductListComponent);
//     component = fixture.componentInstance;   
    
//     mockAuthService.isAdmin.next(false);
    
 

//     fixture.detectChanges();
//   });

// //   it('should create', () => {     
// //     expect(component).toBeTruthy();
// //     
// //   });

    
// // it("should delete the selected product from products", () => {
// //     component.products = PRODUCTS;
// //     mockProductService.deleteProduct.and.returnValue(
// //             of({ success: true, status: 200, message:"you product has been deleted" }));
    
// //     component.deleteProduct(PRODUCTS[0]);
// //     expect(component.handleProductsList).toHaveBeenCalled();
// // })

// });
