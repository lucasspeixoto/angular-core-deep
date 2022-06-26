/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable no-unused-vars */
/* eslint-disable @angular-eslint/no-output-rename */
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Attribute,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CoursesService } from 'src/app/courses/services/courses.service';

import { Course } from '../../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    AfterContentChecked,
    AfterViewChecked,
    AfterContentInit,
    AfterViewInit,
    DoCheck
{
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
  ) {
    console.log('constructor');
  }

  ngOnInit() {
    /**
     * Toda lógica que depende de variáveis de input
     * devem ser utilizadas no ngOnInit ao inves
     * do constructor
     */
    console.log(`ngOnInit`);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    /**
     * Local Ideal para lógica envolveldo variáveis
     * obtidas via @ViewContentChild ou @ViewContentChildren
     */
    console.log(`ngAfterContentInit`);
  }

  ngAfterViewInit() {
    /**
     * Local Ideal para lógica envolveldo variáveis
     * obtidas via @ViewViewChild ou @ViewViewChildren
     */
    console.log(`ngAfterViewInit`);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges) {
    // Chamado sem que o CD passa pelo componente
    console.log('ngOnChanges', changes);
  }

  ngAfterContentChecked() {
    /*******************************
     * Local ideal para modificar alguns dados
     * segundos após o ciclo de change detection
     */
    console.log('ngAfterContentChecked');
    //this.course.description = 'ngAfterContentChecked';
    //this.course.category = 'ADVANCED';
  }

  ngAfterViewChecked() {
    /** Nada que esteja refletindo na view deve ser
     * modificada dentro deste lifecyclo, pois a view
     * ja foi 'montada'. É o local ideal para operações
     * envolvendo a DOM (Scrools, focus, etc...)
     */
    console.log('ngAfterViewChecked');
    //this.course.description = 'ngAfterViewChecked'; //! ERRO

    /**
     * Uma utilidade do ngAfterViewChecked é em uma
     * situação onde um curso é adicionado e queremos
     * gerar um scrool para o topo de página. Se fizermos
     * isto antes, os elementos ainda não foram exibidos, logo
     * o scroll não terá efeito.
     */
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  onTitleChanged(newTitle: string) {
    console.log('Title changed');
    this.course.description = newTitle;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
