import { TestBed } from '@angular/core/testing';

import { TrackSbService } from './track-sb.service';

describe('TrackSbService', () => {
  let service: TrackSbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackSbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
