import { TestBed } from '@angular/core/testing';

import { SkillService } from './skill.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SkillService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule,]
  }));

  it('should be created', () => {
    const service: SkillService = TestBed.get(SkillService);
    expect(service).toBeTruthy();
  });
});
