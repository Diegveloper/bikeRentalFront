import { TestBed } from '@angular/core/testing';

import { BikesService } from './bikes-service.service';

describe('BikesServiceService', () => {
  let service: BikesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
