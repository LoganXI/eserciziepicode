import { TestBed } from '@angular/core/testing';

import { GundamsService } from './gundams.service';

describe('GundamsService', () => {
  let service: GundamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GundamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
