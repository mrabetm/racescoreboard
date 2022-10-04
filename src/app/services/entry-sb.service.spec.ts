import { TestBed } from '@angular/core/testing';

import { EntrySbService } from './entry-sb.service';

describe('EntrySbService', () => {
  let service: EntrySbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntrySbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
