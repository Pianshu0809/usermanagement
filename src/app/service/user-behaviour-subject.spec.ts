import { TestBed } from '@angular/core/testing';

import { UserBehaviourSubject } from './user-behaviour-subject';

describe('UserBehaviourSubject', () => {
  let service: UserBehaviourSubject;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBehaviourSubject);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
