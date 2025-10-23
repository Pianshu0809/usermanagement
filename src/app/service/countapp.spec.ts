import { TestBed } from '@angular/core/testing';

import { Countapp } from './countapp';

describe('Countapp', () => {
  let service: Countapp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Countapp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
