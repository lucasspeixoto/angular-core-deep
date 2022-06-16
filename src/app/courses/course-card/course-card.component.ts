/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course!: Course;

  @Input()
  courseIndex!: number;

  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  /*******************************
   * <div class="course-category" [ngSwitch]="course.category">
    <div class="category" *ngSwitchCase="'BEGINNER'">Beginner</div>
    <div class="category" *ngSwitchCase="'ADVANCED'">Advanced</div>
    <div class="category" *ngSwitchCase="'INTERMEDIATE'">Intermediate</div>
    <div class="category" *ngSwitchDefault>All Levels</div>
  </div>
   */

  constructor() {}

  ngOnInit() {}

  titleCase(str: string) {
    const newString: string[] = str.toLowerCase().split(' ');
    for (let i = 0; i < newString.length; i++) {
      newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
    }
    return newString.join(' ');
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log('card component - button clicked ...');
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    return {
      beginner: this.course.category == 'BEGINNER',
    };
    /** Ou
     * if(this.course.category == 'BEGINNER') {  return ['beginner'] }
     */
  }

  cardStyles() {
    return {
      'box-shadow': this.courseIndex === 1 ? '3px 2px 3px 2px #888888' : '',
      'background-image': 'url(' + this.course.iconUrl + ')',
    };
  }
}

/**
 * ngClass: Podemos passar uma string [ngClass]="'beginner'",
 * um array [ngClass]="['beginner', 'course-card']" e um objeto
 * de configuração [ngClass]="{'beginner': true, 'course-card': true}" ou
 * uma função que retorna uma expression [ngClass]="cardClasses()""
 */

/**
 * ngStyle: Para Facilitar a inclusão de multiplos estilos
 * e a estilização condicional
 */
