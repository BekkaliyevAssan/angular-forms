import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnswerCardComponent } from './user-answer-card.component';

describe('UserAnswerCardComponent', () => {
  let component: UserAnswerCardComponent;
  let fixture: ComponentFixture<UserAnswerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAnswerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAnswerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
