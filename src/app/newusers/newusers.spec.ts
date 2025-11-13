import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newusers } from './newusers';

describe('Newusers', () => {
  let component: Newusers;
  let fixture: ComponentFixture<Newusers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Newusers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newusers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
