import { TestBed } from '@angular/core/testing';

import { BroteService } from './brote.service';

describe('BroteService', () => {
  let service: BroteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BroteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
