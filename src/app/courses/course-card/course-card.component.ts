/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable no-unused-vars */
/* eslint-disable @angular-eslint/no-output-rename */
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { Course } from '../../model/course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    //* @Optional() private coursesService: CoursesService ==> Mesmo sem um provider, vai permitir a injeção
    //* @Self() private coursesService: CoursesService ==> Com o decorator Self o provider do service, se não existe no componente, não mais vem do componente pai
    //* @SkipSelf() private coursesService: CoursesService ==> Mesmo com um provider local, o decorator SkipSelf vai utilizar a instância do service do componente pai (app.component)
    private coursesService: CoursesService,
    @Attribute('type') private type: string,
    private cd: ChangeDetectorRef,
  ) /**
   * O Decorartor @Attribute permite que uma variávei seja passada
   * para um componente filho como atributo ao inves de um simples
   * input. Esta estratégia vai gerar um ganho de performance
   * em situações em que não é necessário que o Angular fique verificando
   * se houve alterações no valor de type
   *
   *
   *
   */ {}

  ngOnInit() {
    //console.log(`coursesService course card ${this.coursesService.id}`);
  }

  onTitleChanged(newTitle: string) {
    console.log('Title changed');
    this.course.description = newTitle;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
