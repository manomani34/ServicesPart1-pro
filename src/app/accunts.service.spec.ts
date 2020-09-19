import { TestBed } from '@angular/core/testing';

import { AccuntsService } from './accunts.service';

describe('AccuntsService', () => {
  let service: AccuntsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccuntsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
