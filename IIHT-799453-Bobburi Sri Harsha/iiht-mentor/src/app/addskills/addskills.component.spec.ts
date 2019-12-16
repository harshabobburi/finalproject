import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddskillsComponent } from './addskills.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('AddskillsComponent', () => {
  let component: AddskillsComponent;
  let fixture: ComponentFixture<AddskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddskillsComponent ],imports:[HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule,FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
