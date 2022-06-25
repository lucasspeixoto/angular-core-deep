import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CourseImageComponent } from './courses/course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
//import { CoursesService } from './courses/courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  //providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
