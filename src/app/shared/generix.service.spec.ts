import { TestBed } from '@angular/core/testing';

import { GenerixService } from './generix.service';

describe('GenerixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerixService = TestBed.get(GenerixService);
    expect(service).toBeTruthy();
  });
});
