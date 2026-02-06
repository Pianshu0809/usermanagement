import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLearningTwcss } from './new-learning-twcss';

describe('NewLearningTwcss', () => {
  let component: NewLearningTwcss;
  let fixture: ComponentFixture<NewLearningTwcss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewLearningTwcss]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLearningTwcss);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
