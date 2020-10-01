import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorGeneralComponent } from './creator-general.component';

describe('CreatorGeneralComponent', () => {
  let component: CreatorGeneralComponent;
  let fixture: ComponentFixture<CreatorGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
