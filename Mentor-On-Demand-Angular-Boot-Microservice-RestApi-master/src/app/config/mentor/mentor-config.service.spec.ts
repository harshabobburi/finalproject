import { TestBed } from '@angular/core/testing';

import { MentorConfigService } from './mentor-config.service';

describe('MentorConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MentorConfigService = TestBed.get(MentorConfigService);
    expect(service).toBeTruthy();
  });
});
