import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paginationuser } from './paginationuser';

describe('Paginationuser', () => {
  let component: Paginationuser;
  let fixture: ComponentFixture<Paginationuser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paginationuser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paginationuser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
