import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dummydata } from './dummydata';

describe('Dummydata', () => {
  let component: Dummydata;
  let fixture: ComponentFixture<Dummydata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dummydata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dummydata);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
