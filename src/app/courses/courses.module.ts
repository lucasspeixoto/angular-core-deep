import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CourseCardComponent } from './course-card/course-card.component';
import { CourseDescriptionComponent } from './course-description/course-description.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { CoursesService } from './courses.service';
import { FilterByCategoryPipe } from './filter-by-category.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    FilterByCategoryPipe,
    CourseDescriptionComponent,
  ],
  exports: [
    CourseCardComponent,
    CourseImageComponent,
    CourseDescriptionComponent,
    FilterByCategoryPipe,
  ],
  providers: [CoursesService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoursesModule {}
