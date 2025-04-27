import { TestBed } from '@angular/core/testing';

import { DeviceCategoriesService } from './device-categories.service';

describe('DeviceCategoriesService', () => {
  let service: DeviceCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
