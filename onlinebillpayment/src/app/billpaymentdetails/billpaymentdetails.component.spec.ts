import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillpaymentdetailsComponent } from './billpaymentdetails.component';

describe('BillpaymentdetailsComponent', () => {
  let component: BillpaymentdetailsComponent;
  let fixture: ComponentFixture<BillpaymentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillpaymentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillpaymentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
