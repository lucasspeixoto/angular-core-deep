import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseImageComponent } from './components/course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';
import { CoursesService } from './services/courses.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    FilterByCategoryPipe,
  ],
  providers: [CoursesService],
  exports: [CourseCardComponent, CourseImageComponent],
})
export class CoursesModule {}
