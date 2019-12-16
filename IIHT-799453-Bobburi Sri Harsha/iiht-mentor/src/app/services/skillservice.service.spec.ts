import { TestBed } from '@angular/core/testing';

import { SkillserviceService } from './skillservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('SkillserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports:[HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule,FormsModule]}));

  it('should be created', () => {
    const service: SkillserviceService = TestBed.get(SkillserviceService);
    expect(service).toBeTruthy();
  });
});
