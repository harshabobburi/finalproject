import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentordetailsComponent } from './mentordetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('MentordetailsComponent', () => {
  let component: MentordetailsComponent;
  let fixture: ComponentFixture<MentordetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentordetailsComponent ],imports:[HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule,FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
