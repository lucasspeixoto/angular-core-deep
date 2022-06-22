/* eslint-disable no-unused-vars */
import { Component, Inject, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { COURSES } from '../db-data';
import { AppConfig, CONFIG_TOKEN } from './config';
import { CourseTitleComponent } from './course-title/course-title.component';
import { CoursesService } from './courses/courses.service';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  courses: Course[] = COURSES;

  coursesTotal = this.courses.length;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private injector: Injector,
  ) {}

  ngOnInit() {
    const htmlElement = createCustomElement(CourseTitleComponent, {
      injector: this.injector,
    });

    customElements.define('course-title', htmlElement);
  }

  onEditCourse() {
    this.courses[1].category = 'ADVANCED';
  }

  save(course: any) {
    this.coursesService.saveCourse(course).subscribe(() => console.log('Course Saved!'));
  }
}
