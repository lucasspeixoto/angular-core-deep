/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pipe, PipeTransform } from '@angular/core';

import { Course } from '../model/course';

@Pipe({
  name: 'filterByCategory',
  pure: false,
  standalone: false, //! Pipes impuros vão ser ser chamados em todas as vezes onde o CD executar (Cuidados com problemas de performance)
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(courses: Course[], category?: string): Course[] {
    if (!category || category === 'ALL') return courses;

    return courses.filter((course: Course) => course.category === category);
  }
}
