import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usersdata } from './usersdata';

describe('Usersdata', () => {
  let component: Usersdata;
  let fixture: ComponentFixture<Usersdata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Usersdata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Usersdata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
