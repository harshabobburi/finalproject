import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSkillComponent } from './mentor-skill.component';

describe('MentorSkillComponent', () => {
  let component: MentorSkillComponent;
  let fixture: ComponentFixture<MentorSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
