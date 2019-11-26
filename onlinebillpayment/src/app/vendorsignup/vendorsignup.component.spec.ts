import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorsignupComponent } from './vendorsignup.component';

describe('VendorsignupComponent', () => {
  let component: VendorsignupComponent;
  let fixture: ComponentFixture<VendorsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
