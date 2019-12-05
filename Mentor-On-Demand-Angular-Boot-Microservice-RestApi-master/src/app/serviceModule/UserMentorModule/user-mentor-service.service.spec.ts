import { TestBed } from '@angular/core/testing';

import { UserMentorServiceService } from './user-mentor-service.service';

describe('UserMentorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMentorServiceService = TestBed.get(UserMentorServiceService);
    expect(service).toBeTruthy();
  });
});
