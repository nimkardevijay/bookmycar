import { TestBed } from '@angular/core/testing';

import { CbsService } from './cbs.service';

describe('CbsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CbsService = TestBed.get(CbsService);
    expect(service).toBeTruthy();
  });
});
