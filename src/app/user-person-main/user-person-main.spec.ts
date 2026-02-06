import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonMain } from './user-person-main';

describe('UserPersonMain', () => {
  let component: UserPersonMain;
  let fixture: ComponentFixture<UserPersonMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPersonMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPersonMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
