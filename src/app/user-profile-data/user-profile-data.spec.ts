import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileData } from './user-profile-data';

describe('UserProfileData', () => {
  let component: UserProfileData;
  let fixture: ComponentFixture<UserProfileData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
