import { TestBed } from '@angular/core/testing';

import { MentorserviceService } from './mentorservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('MentorserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports:[HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule,FormsModule]}));

  it('should be created', () => {
    const service: MentorserviceService = TestBed.get(MentorserviceService);
    expect(service).toBeTruthy();
  });
});
