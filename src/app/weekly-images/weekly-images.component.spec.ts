import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyImagesComponent } from './weekly-images.component';

describe('WeeklyImagesComponent', () => {
  let component: WeeklyImagesComponent;
  let fixture: ComponentFixture<WeeklyImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
