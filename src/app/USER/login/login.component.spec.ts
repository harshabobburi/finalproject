import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule]
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

  it(`should have as errorMessage null`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.errorMessage).toEqual(null);
  });

  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let errors = {};
    let email = component.loginForm.controls['userId'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeTruthy();
    expect(errors['maxlength']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Set email to something
    email.setValue("toolongshouldfailnowtoolongshouldfailnowtoolongshouldfailnowtoolongshouldfailnowtoolongshouldfailnow");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeTruthy();
    expect(errors['maxlength']).toBeTruthy();
    expect(errors['minlength']).toBeFalsy();

    // Set email to something correct
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeFalsy();
    expect(errors['maxlength']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
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
    expect(errors['maxlength']).toBeTruthy();
    expect(errors['minlength']).toBeFalsy();

    password.setValue("password");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['maxlength']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
});
it('form valid when properly filled', () => {
  let email = component.loginForm.controls['userId'];
  email.setValue("test@example.com");
  let password = component.loginForm.controls['password'];
  password.setValue("password");
  expect(component.loginForm.valid).toBeTruthy();
});
});
