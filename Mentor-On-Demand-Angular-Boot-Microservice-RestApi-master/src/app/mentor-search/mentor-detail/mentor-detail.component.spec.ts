import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorDetailComponent } from './mentor-detail.component';

describe('MentorDetailComponent', () => {
  let component: MentorDetailComponent;
  let fixture: ComponentFixture<MentorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
