import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '../../model/course';

/**
 * ViewEncapsulation.Emulated: Default, o css do componente não interfere no restante do AppComponent
 * ViewEncapsulation.None: Agora o css dentro do componente pode ser utilizado fora dele (Não faz mais sentido utilizar host e host-context)
 * ViewEncapsulation.ShadowDom: Cria um stylesheet em um HTML apartado
 */

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

  @Output()
  courseEmitter = new EventEmitter<Course>();

  constructor() {
    console.log('constructor');
  } //@Attribute('type') private type: string, //private coursesService: CoursesService,

  ngOnInit() {
    console.log('Init');
  }

  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
