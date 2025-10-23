import { TestBed } from '@angular/core/testing';

import { UsersData } from './users-data';

describe('UsersData', () => {
  let service: UsersData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
