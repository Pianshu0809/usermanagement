import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipedemo } from './pipedemo';

describe('Pipedemo', () => {
  let component: Pipedemo;
  let fixture: ComponentFixture<Pipedemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipedemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipedemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
