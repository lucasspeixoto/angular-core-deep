/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { COURSES } from 'src/db-data';

import { Course } from './courses/model/course';
import { CoursesService } from './courses/services/courses.service';

type Category = { id: number; name: string };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  courses: Course[] = COURSES;
  courses$: Observable<Course[]> = new Observable<Course[]>();

  category: Category = {
    id: 4,
    name: 'ALL',
  };
  categories: Category[] = [
    { id: 1, name: 'ALL' },
    { id: 2, name: 'BEGINNER' },
    { id: 3, name: 'INTERMEDIATE' },
    { id: 4, name: 'ADVANCED' },
  ];

  coursesTotal!: number;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService.loadCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
      this.coursesTotal = courses.length;
    });
  }

  changeCategoryFilter(category: Category) {
    this.category = category;
  }

  onEditCourse() {
    /* const course = this.courses[0];
    const newCourse = {
      ...course,
      description: 'New Description',
    };
    this.courses[0] = newCourse; */
    this.courses[0].category = 'ADVANCED';
  }

  save(course: Course | any) {
    this.coursesService.saveCourse(course).subscribe((value: any) => console.log(value));
  }
}
