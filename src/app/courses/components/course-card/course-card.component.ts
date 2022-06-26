/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable no-unused-vars */
/* eslint-disable @angular-eslint/no-output-rename */
import {
  Attribute,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CoursesService } from 'src/app/courses/services/courses.service';

import { Course } from '../../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course!: Course;

  @Input()
  cardIndex!: number;

  /* @Input()
  type!: string; */

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  constructor(
    private coursesService: CoursesService,
    @Attribute('type') private type: string,
    private elRef: ElementRef,
  ) {}

  ngOnInit() {
    /**
     * Toda lógica que depende de variáveis de input
     * devem ser utilizadas no ngOnInit ao inves
     * do constructor
     */
  }

  onTitleChanged(newTitle: string) {
    console.log('Title changed');
    this.course.description = newTitle;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
