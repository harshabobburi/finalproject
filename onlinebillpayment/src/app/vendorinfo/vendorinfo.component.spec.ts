import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorinfoComponent } from './vendorinfo.component';

describe('VendorinfoComponent', () => {
  let component: VendorinfoComponent;
  let fixture: ComponentFixture<VendorinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
