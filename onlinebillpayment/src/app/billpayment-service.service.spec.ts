import { TestBed } from '@angular/core/testing';

import { BillpaymentServiceService } from './billpayment-service.service';

describe('BillpaymentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillpaymentServiceService = TestBed.get(BillpaymentServiceService);
    expect(service).toBeTruthy();
  });
});
