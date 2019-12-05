import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSearchComponent } from './mentor-search.component';

describe('MentorSearchComponent', () => {
  let component: MentorSearchComponent;
  let fixture: ComponentFixture<MentorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
