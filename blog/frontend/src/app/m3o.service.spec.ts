import { TestBed } from '@angular/core/testing';

import { M3oService } from './m3o.service';

describe('M3oService', () => {
  let service: M3oService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(M3oService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
