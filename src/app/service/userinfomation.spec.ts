import { TestBed } from '@angular/core/testing';

import { Userinfomation } from './userinfomation';

describe('Userinfomation', () => {
  let service: Userinfomation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Userinfomation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
