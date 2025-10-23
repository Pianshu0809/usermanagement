import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Limitlen } from './limitlen';

describe('Limitlen', () => {
  let component: Limitlen;
  let fixture: ComponentFixture<Limitlen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Limitlen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Limitlen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
