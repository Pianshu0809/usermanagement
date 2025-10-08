import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profileinformation } from './profileinformation';

describe('Profileinformation', () => {
  let component: Profileinformation;
  let fixture: ComponentFixture<Profileinformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profileinformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profileinformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
