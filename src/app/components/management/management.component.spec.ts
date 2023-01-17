import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/services/auth.service';
import { OrderHistoryService } from 'src/app/services/order-history.service';

import { ManagementComponent } from './management.component';

// describe('ManagementComponent', () => {
//   let component: ManagementComponent;
//   let fixture: ComponentFixture<ManagementComponent>;
//   let mockAuthService: any
//   let mockOrderHistoryService: any

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ManagementComponent ],
//       providers: [
//         { provide: AuthService, useValue: mockAuthService }, 
//         { provide: OrderHistoryService, useValue: mockOrderHistoryService}
//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ManagementComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
