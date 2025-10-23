import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Praticecomponent } from './praticecomponent';

describe('Praticecomponent', () => {
  let component: Praticecomponent;
  let fixture: ComponentFixture<Praticecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Praticecomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Praticecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
