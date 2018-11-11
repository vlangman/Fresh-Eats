import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingImagesVerticalComponent } from './landing-images-vertical/landing-images-vertical.component';
import { MealProcessComponent } from './meal-process/meal-process.component';
import { WeeklyImagesComponent } from './weekly-images/weekly-images.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingImagesVerticalComponent,
    MealProcessComponent,
    WeeklyImagesComponent
  ],
  imports: [
  	NgbModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
