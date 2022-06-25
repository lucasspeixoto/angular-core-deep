/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { COURSES } from 'src/db-data';

import { CoursesService } from './courses/courses.service';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  courses: Course[] = COURSES;
  courses$: Observable<Course[]> = new Observable<Course[]>();

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService.loadCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
    });
  }

  onEditCourse() {
    const course = this.courses[0];
    const newCourse = {
      ...course,
      description: 'New Description',
    };
    this.courses[0] = newCourse;
  }

  save(course: Course | any) {
    this.coursesService.saveCourse(course).subscribe((value: any) => console.log(value));
  }
}
