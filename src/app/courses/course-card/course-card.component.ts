/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable no-unused-vars */
/* eslint-disable @angular-eslint/no-output-rename */
import { Attribute, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Course } from '../../model/course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  providers: [CoursesService],

  /**
   * Se existe um provider de um serviço em um componente
   * filho ele vai utilizar uma instância única criada para
   * ele e esta instância não será utilizada por nenhum outro
   * componente na aplicação. Se o componente não tiver o provider
   * ele vai buscar no componente pai (app.componente)
   *
   * Multiplas instâncias locais é um estratégia recomendada
   * quando temos estado compartilhado no nosso service e
   * não queremos compartilhar este estado em todo o app, queremos utiliza-lo
   * apenas em um componente específico. Caso não exista nenhum estado,
   * não é recomendado providers locais nos
   * componentes
   */
})
export class CourseCardComponent implements OnInit {
  @Input()
  course!: Course;

  @Input()
  cardIndex!: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  constructor(
    //* @Optional() private coursesService: CoursesService ==> Mesmo sem um provider, vai permitir a injeção
    //* @Self() private coursesService: CoursesService ==> Com o decorator Self o provider do service, se não existe no componente, não mais vem do componente pai
    //* @SkipSelf() private coursesService: CoursesService ==> Mesmo com um provider local, o decorator SkipSelf vai utilizar a instância do service do componente pai (app.component)
    private coursesService: CoursesService,
    @Attribute('type') private type: string,
  ) {}

  ngOnInit() {
    console.log(`coursesService course card ${this.coursesService.id}`);
  }

  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
