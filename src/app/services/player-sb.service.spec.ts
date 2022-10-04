import { TestBed } from '@angular/core/testing';

import { PlayerSbService } from './player-sb.service';

describe('PlayerSbService', () => {
  let service: PlayerSbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerSbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
