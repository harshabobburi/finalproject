import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFoodItemInfoComponent } from './item-info.component';

describe('AppFoodItemInfoComponent', () => {
  let component: AppFoodItemInfoComponent;
  let fixture: ComponentFixture<AppFoodItemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFoodItemInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFoodItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
