import { TestBed, inject } from '@angular/core/testing';

import { VicaApiService } from './vica-api.service';

describe('VicaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VicaApiService]
    });
  });

  it('should be created', inject([VicaApiService], (service: VicaApiService) => {
    expect(service).toBeTruthy();
  }));
});
