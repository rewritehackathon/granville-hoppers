import { TestBed, inject } from '@angular/core/testing';

import { GigService } from './gig.service';

describe('GigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GigService]
    });
  });

  it('should be created', inject([GigService], (service: GigService) => {
    expect(service).toBeTruthy();
  }));
});
