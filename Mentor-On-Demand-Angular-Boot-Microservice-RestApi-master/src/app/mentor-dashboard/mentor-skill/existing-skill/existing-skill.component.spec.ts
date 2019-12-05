import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingSkillComponent } from './existing-skill.component';

describe('ExistingSkillComponent', () => {
  let component: ExistingSkillComponent;
  let fixture: ComponentFixture<ExistingSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
