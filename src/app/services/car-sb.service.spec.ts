import { TestBed } from '@angular/core/testing';

import { CarSbService } from './car-sb.service';

describe('CarSbService', () => {
  let service: CarSbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarSbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
