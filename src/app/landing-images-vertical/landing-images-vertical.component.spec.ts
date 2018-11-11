import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingImagesVerticalComponent } from './landing-images-vertical.component';

describe('LandingImagesVerticalComponent', () => {
  let component: LandingImagesVerticalComponent;
  let fixture: ComponentFixture<LandingImagesVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingImagesVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingImagesVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
