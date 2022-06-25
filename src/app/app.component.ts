/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { HttpClient } from '@angular/common/http';
import { Inject, InjectionToken } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CoursesService } from './courses/courses.service';
import { Course } from './model/course';

// Manual Provide for a service
export function courserServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);
}

export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICES');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /*  Injeção manual
  providers: [
    { provide: COURSES_SERVICE, useFactory: courserServiceProvider, deps: [HttpClient] },
  ], */
  providers: [CoursesService],
})
export class AppComponent implements OnInit {
  courses: Course[] = [];
  courses$: Observable<Course[]> = new Observable();

  /** Criação de um provider manualmente para o coursesServices
  constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {
  }
 */
  constructor(private coursesService: CoursesService) {
    /** Criação de um provider manualmente para o coursesServices     */
  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  onEditCourse() {
    this.courses[1].category = 'ADVANCED';
  }

  save(course: Course | any) {
    this.coursesService.saveCourse(course).subscribe((value: any) => console.log(value));
  }
}
