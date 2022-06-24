import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CourseTitleComponent } from './course-title/course-title.component';
import { CoursesModule } from './courses/courses.module';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';

@NgModule({
  declarations: [AppComponent, CourseTitleComponent, HighlightedDirective, NgxUnlessDirective],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, CoursesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
