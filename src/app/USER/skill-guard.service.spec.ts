import { TestBed } from '@angular/core/testing';

import { SkillGuardService } from './skill-guard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SkillGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[RouterTestingModule, HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SkillGuardService = TestBed.get(SkillGuardService);
    expect(service).toBeTruthy();
  });
});
