import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { COURSES } from 'src/db-data';

import { CourseCardComponent } from './courses/course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = COURSES[0].description;

  courses: Course[] = COURSES;

  @ViewChild('cardRef1', { read: ElementRef })
  card1!: ElementRef;

  @ViewChild('container')
  containerDiv!: ElementRef;

  @ViewChild('courseImage')
  courseImage!: ElementRef;

  /**
   * Tem acesso a referencia da classe CourseCardComponente,
   * podendo acessar os valores
   */
  @ViewChildren(CourseCardComponent)
  cards1!: QueryList<CourseCardComponent>;

  /**
   * Tem acesso as referências na DOM dos elementos
   */
  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards2!: QueryList<ElementRef>;
  /**
   * com {read: ElementRef} vamos ovter a referência no DOM de
   * cada um dos elementos da QueryList.
   */

  birthDate = new Date(1991, 9, 30);

  price = 0.99254896746;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  firstCourse: any = COURSES[0];

  constructor() {
    console.log(this.containerDiv); // undefined
  }

  ngAfterViewInit(): void {
    /**
     * AfterViewInit é o melhor momento para
     * acessar as variáves de view (ViewChild e ViewChildren)
     */
    console.log(this.cards1);
    console.log(this.cards2);
    //console.log(this.containerDiv);
    //console.log(this.courseImage); // Não é possível uma query referenciando um elemento dentro de um child

    //console.log(this.cards1.first);

    // eslint-disable-next-line prettier/prettier
    //this.cards1.changes.subscribe(cards1 => console.log(cards1));
    /**
     * o método changes retorna um observable que fica escutando
     * o array 'cards', escutando as mudanças
     */
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  saveCourse(course: Course) {
    console.log(course);
    console.log(this.cards1);
    console.log(this.card1);
    console.log(this.containerDiv);
  }

  onCourseEdited() {
    this.courses.push({
      id: 6,
      description: 'Angular PWA Course',
      longDescription:
        "<p class='course-description'>Learn Angular Progressive Web Applications, build the future of the Web Today.",
      iconUrl:
        'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
      category: 'ADVANCED',
      lessonsCount: 8,
    });
  }
}
