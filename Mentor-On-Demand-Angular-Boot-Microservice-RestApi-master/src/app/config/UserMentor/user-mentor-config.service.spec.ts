import { TestBed } from '@angular/core/testing';

import { UserMentorConfigService } from './user-mentor-config.service';

describe('UserMentorConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMentorConfigService = TestBed.get(UserMentorConfigService);
    expect(service).toBeTruthy();
  });
});
