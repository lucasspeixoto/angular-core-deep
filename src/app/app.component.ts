/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  DoCheck,
  Inject,
  InjectionToken,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { COURSES } from 'src/db-data';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, DoCheck {
  courses: Course[] = COURSES;
  courses$: Observable<Course[]> = new Observable<Course[]>();

  loaded = false;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private cd: ChangeDetectorRef,
  ) {
    //console.log(`root component ${this.coursesService.id}`);
    /** Criação de um provider manualmente para o coursesServices     */
    //console.log(config);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    if (this.loaded) this.cd.markForCheck();
  }

  ngOnInit() {
    this.coursesService.loadCourses().subscribe((courses: Course[]) => {
      this.courses = courses;
      this.loaded = true;

      /**
       * O markForCheck vai marcar o component com Strategy onPush
       * para passar por checagem de atualização, é util em situações
       * onde o componente faz alguma requisição que fica com alta frequência
       * recebendo novos dados, que poderia causar checagem em todo o app
       * para cada novo valor
       */
    });
  }

  onEditCourse() {
    /**
     * Por padrão, mesmo com OnPush detection um componente não
     * vai passar pelo ChangeDetection se os parãmetros de algum
     * objeto mudarem, apenas se a referência na memória
     */
    const course = this.courses[0];
    const newCourse = { ...course };
    newCourse.category = 'ADVANCED';
    newCourse.description = 'New Description';

    this.courses[0] = newCourse;
  }

  save(course: Course | any) {
    this.coursesService.saveCourse(course).subscribe((value: any) => console.log(value));
  }
}
