import { TestBed } from '@angular/core/testing';

import { AnimacionService } from './animacion.service';

describe('AnimacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimacionService = TestBed.get(AnimacionService);
    expect(service).toBeTruthy();
  });
});
