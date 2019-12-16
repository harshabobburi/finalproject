import { TestBed } from '@angular/core/testing';

import { MentorGuardService } from './mentor-guard.service';

describe('MentorGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MentorGuardService = TestBed.get(MentorGuardService);
    expect(service).toBeTruthy();
  });
});
