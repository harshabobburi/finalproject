import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainhomepageComponent } from './mainhomepage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('MainhomepageComponent', () => {
  let component: MainhomepageComponent;
  let fixture: ComponentFixture<MainhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainhomepageComponent ],imports:[HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule,FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
