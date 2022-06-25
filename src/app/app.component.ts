/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { HttpClient } from '@angular/common/http';
import { Inject, InjectionToken, Optional } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AppConfig, CONFIG_TOKEN } from './config';
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
  ],
   Desta forma as variáveis de configuração
   serão inseridas no bundle mesmo sem a injeção
   no app.component.
   providers: [
    {
      provide: CONFIG_TOKEN,
      //useFactory: () => APP_CONFIG //OU -> useValue: APP_CONFIG,
      useValue: APP_CONFIG,
    },
  ],
   */
  providers: [CoursesService],
})
export class AppComponent implements OnInit {
  courses: Course[] = [];
  courses$ = new Observable<Course[]>();

  /** Criação de um provider manualmente para o coursesServices
  constructor(@Inject(COURSES_SERVICE) private coursesService: CoursesService) {
  }
 */
  constructor(
    @Optional() private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
  ) {
    //console.log(`root component ${this.coursesService.id}`);
    /** Criação de um provider manualmente para o coursesServices     */
    console.log(config);
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
