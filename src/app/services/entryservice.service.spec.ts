import { TestBed } from '@angular/core/testing';

import { EntryserviceService } from './entryservice.service';

describe('EntryserviceService', () => {
  let service: EntryserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntryserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
