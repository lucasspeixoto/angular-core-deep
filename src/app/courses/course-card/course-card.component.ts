/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { Course } from 'src/app/model/course';

import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input()
  course!: Course;

  // eslint-disable-next-line @angular-eslint/no-output-rename
  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  @ContentChild('courseImage')
  image!: ElementRef;

  @ContentChild('container')
  container!: ElementRef; // Não funciona, ContentChild é para queries dentro de um ng-content

  @ContentChild(CourseImageComponent)
  imageComponent!: CourseImageComponent;

  @ContentChild(CourseImageComponent, { read: ElementRef })
  imageRef!: ElementRef;

  @ContentChildren(CourseImageComponent)
  images!: QueryList<CourseImageComponent>;
  /*******************************
   * <div class="course-category" [ngSwitch]="course.category">
    <div class="category" *ngSwitchCase="'BEGINNER'">Beginner</div>
    <div class="category" *ngSwitchCase="'ADVANCED'">Advanced</div>
    <div class="category" *ngSwitchCase="'INTERMEDIATE'">Intermediate</div>
    <div class="category" *ngSwitchDefault>All Levels</div>
  </div>
   */

  @Input()
  noImageTemplate!: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {}

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    console.log(this.image);
    console.log(this.imageComponent);
    console.log(this.imageRef);
    console.log(this.images);
    //Add 'implements AfterContentInit' to the class.
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
