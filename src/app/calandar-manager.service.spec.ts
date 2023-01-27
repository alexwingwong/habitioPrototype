import { TestBed } from '@angular/core/testing';

import { CalandarManagerService } from './calandar-manager.service';

describe('CalandarManagerService', () => {
  let service: CalandarManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalandarManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
