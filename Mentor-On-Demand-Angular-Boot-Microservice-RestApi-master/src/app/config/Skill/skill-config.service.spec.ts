import { TestBed } from '@angular/core/testing';

import { SkillConfigService } from './skill-config.service';

describe('SkillConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillConfigService = TestBed.get(SkillConfigService);
    expect(service).toBeTruthy();
  });
});
