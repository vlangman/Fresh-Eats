import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealProcessComponent } from './meal-process.component';

describe('MealProcessComponent', () => {
  let component: MealProcessComponent;
  let fixture: ComponentFixture<MealProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
