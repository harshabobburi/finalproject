import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorItemComponent } from './mentor-item.component';

describe('MentorItemComponent', () => {
  let component: MentorItemComponent;
  let fixture: ComponentFixture<MentorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
