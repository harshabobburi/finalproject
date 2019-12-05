import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorConnectionComponent } from './mentor-connection.component';

describe('MentorConnectionComponent', () => {
  let component: MentorConnectionComponent;
  let fixture: ComponentFixture<MentorConnectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorConnectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
