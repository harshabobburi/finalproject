import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],imports:[HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule,FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it(`should have as errorMessage null`, () => {
  //   const fixture = TestBed.createComponent(LoginComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.errorMessage).toEqual(null);
  // });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.loginForm.controls['username'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

  
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();

    // Set email to something
    // email.setValue("toolongshouldfailnowtoolongshouldfailnowtoolongshouldfailnowtoolongshouldfailnowtoolongshouldfailnow");
    // errors = email.errors || {};
    // expect(errors['required']).toBeFalsy();

    // // // Set email to something correct
    // email.setValue("harsha");
    // errors = email.errors || {};
    // expect(errors['required']).toBeFalsy();
  });
  it('password field validity', () => {
    let errors = {};
    let password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();

    // Email field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    password.setValue("passwordpassword");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();

    // password.setValue("pass");
    // errors = password.errors || {};
    // expect(errors['required']).toBeFalsy();
    // expect(errors['minlength']).toBeTruthy();
});
it('form valid when properly filled', () => {
  let email = component.loginForm.controls['username'];
  email.setValue("test@example.com");
  let password = component.loginForm.controls['password'];
  password.setValue("pas");
  expect(component.loginForm.valid).toBeTruthy();
});
});
