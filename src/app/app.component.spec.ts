import { HttpClient } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of, Subject } from 'rxjs';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';


describe('AppComponent', () => {
  let mockAuthService: any;
  let fixture: any;
  let mockIsAdmin: any

  beforeEach(async () => {
    // provide mock auth service
    mockAuthService = jasmine.createSpyObj(['checkLogin', 'checkIsAdmin']);
    // create a mock isAdmin subject 
    mockAuthService.isAdmin = new Subject<boolean>();

    mockAuthService.checkLogin.and.returnValue(of([{ success: true}]));
    mockAuthService.isAdmin.next(true)

    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        HttpClient,
        { provide: AuthService, useValue: mockAuthService }, 
   
      ]
    }).compileComponents();


  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  
  });

  it(`should have as title 'ecommerce-website'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ecommerce-website');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('ecommerce-website app is running!');
  // });

  it("should call checkLogin in authService once", fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges() //ngOnInit

    expect(mockAuthService.checkLogin).toHaveBeenCalled();    

  }))

  it("should check isAdmin is true ", () => {
    // set up 
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.isAdmin = false
    mockAuthService.checkIsAdmin.and.returnValue(of(true));

    //action
    app.checkIsAdmin();

    //assert
    expect(app.isAdmin).toBe(true);

  })

  
});
