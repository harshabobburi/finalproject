import { TestBed } from '@angular/core/testing';

import { SkillServiceService } from './skill-service.service';

describe('SkillServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillServiceService = TestBed.get(SkillServiceService);
    expect(service).toBeTruthy();
  });
});
