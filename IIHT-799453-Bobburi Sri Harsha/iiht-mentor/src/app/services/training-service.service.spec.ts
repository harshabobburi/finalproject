import { TestBed } from '@angular/core/testing';

import { TraningServiceService } from './training-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('TraningServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({imports:[HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule,FormsModule]}));

  it('should be created', () => {
    const service: TraningServiceService = TestBed.get(TraningServiceService);
    expect(service).toBeTruthy();
  });
});
