import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseImageComponent } from './components/course-image/course-image.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';
import { CoursesService } from './services/courses.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    FilterByCategoryPipe,
  ],
  exports: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    FilterByCategoryPipe,
  ],
  providers: [CoursesService],
})
export class CoursesModule {}
