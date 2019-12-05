import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProposalComponent } from './user-proposal.component';

describe('UserProposalComponent', () => {
  let component: UserProposalComponent;
  let fixture: ComponentFixture<UserProposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
