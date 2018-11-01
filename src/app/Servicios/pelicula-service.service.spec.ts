import { TestBed } from '@angular/core/testing';

import { PeliculaServiceService } from './pelicula-service.service';

describe('PeliculaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeliculaServiceService = TestBed.get(PeliculaServiceService);
    expect(service).toBeTruthy();
  });
});
