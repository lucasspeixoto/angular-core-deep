/* eslint-disable no-unused-vars */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from '../model/course';

let counter = 0;

@Injectable({
  providedIn: 'root', //providedIn = 'Onde o service deve ser instanciado'
  /* useFactory: (http: HttpClient) => new CoursesService(http),
  deps: [HttpClient], */
  /**
   * Esta estratégia com providedIn root, useFactory e deps,
   * só vai injetar no bundle o nosso service se ele for injetado no
   * componente, caso contrário não, mesmo não necessitando em determinado
   * componente sem lazy loading, ele é injetado no bundle, aumentando seu
   * tamanho sem necessidade
   * Ao invés de useFactory + deps, podemos substituir por useClass: CoursesService
   */
})
export class CoursesService {
  id: number;
  constructor(private http: HttpClient) {
    this.id = counter;
    counter++;
  }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams().set('page', '1').set('pageSize', '10');

    return this.http.get<Course[]>('/api/courses', { params });
  }

  saveCourse(course: Course): Observable<Course> {
    const headers = new HttpHeaders().set('X-Auth', 'userId');

    return this.http.put<Course>(`/api/courses/${course.id}`, course, { headers });
  }
}
