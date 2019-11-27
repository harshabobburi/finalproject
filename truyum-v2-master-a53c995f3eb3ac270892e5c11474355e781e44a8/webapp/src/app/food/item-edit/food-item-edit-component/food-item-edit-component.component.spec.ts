import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemEditComponentComponent } from './food-item-edit-component.component';

describe('FoodItemEditComponentComponent', () => {
  let component: FoodItemEditComponentComponent;
  let fixture: ComponentFixture<FoodItemEditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodItemEditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
