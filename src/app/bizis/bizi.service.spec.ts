import { TestBed, inject } from '@angular/core/testing';

import { BiziService } from './bizi.service';

describe('BiziService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BiziService]
    });
  });

  it('should be created', inject([BiziService], (service: BiziService) => {
    expect(service).toBeTruthy();
  }));
});
