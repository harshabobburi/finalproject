import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentormainpageComponent } from './mentormainpage.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('MentormainpageComponent', () => {
  let component: MentormainpageComponent;
  let fixture: ComponentFixture<MentormainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentormainpageComponent ],imports:[HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule,FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentormainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
