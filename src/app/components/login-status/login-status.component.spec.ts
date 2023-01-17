import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common'
import { LoginStatusComponent } from './login-status.component';

describe('LoginStatusComponent', () => {
  let component: LoginStatusComponent;
  let fixture: ComponentFixture<LoginStatusComponent>;
  let isLoggedIn: boolean
  let mockAuthService: any
  let mockRouter: any
  let location: Location;
  let store: {}


  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj("authService", ['logout', 'getUserDetail'], { isLoggedIn: new Subject()} )
    mockAuthService.logout.and.returnValue(of({ success: true }))
    mockAuthService.getUserDetail.and.returnValue(of({ email: "test", firstName:"test"}))
    mockAuthService.isLoggedIn.next(true)
    mockRouter = { navigate: jasmine.createSpy('navigate')}
    

    await TestBed.configureTestingModule({
      declarations: [ LoginStatusComponent ],
      providers: [
        { provide: AuthService, useValue: mockAuthService }, 
        { provide: Router, useValue: mockRouter}
   
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    
  });

  it("should logout", fakeAsync(() => {
    const resetSpyon = spyOn(component, 'resetUser')
    component.logout();
    expect(mockAuthService.logout).toHaveBeenCalled();
    expect(component.resetUser).toHaveBeenCalled()
    expect(mockRouter.navigate).toHaveBeenCalledOnceWith(['/'])
  }))

  it("should get userDetails", fakeAsync(() => {   
    component.getUserDetails();
    expect(component.fullName).toBe("test");
    
  }))

  it("should resetUser", () => {
    component.fullName = "test";
    component.resetUser();
    expect(component.fullName).toEqual("");
    
  })
});
