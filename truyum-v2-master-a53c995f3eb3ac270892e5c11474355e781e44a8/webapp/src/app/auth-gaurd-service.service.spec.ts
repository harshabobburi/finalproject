import { TestBed } from '@angular/core/testing';

import { AuthGaurdServiceService } from './auth-gaurd-service.service';

describe('AuthGaurdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGaurdServiceService = TestBed.get(AuthGaurdServiceService);
    expect(service).toBeTruthy();
  });
});
