import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseCardComponent } from './courses/course-card/course-card.component';

@NgModule({
  declarations: [AppComponent, CourseCardComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
