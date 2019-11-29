import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinebillsComponent } from './onlinebills.component';

describe('OnlinebillsComponent', () => {
  let component: OnlinebillsComponent;
  let fixture: ComponentFixture<OnlinebillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlinebillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinebillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
