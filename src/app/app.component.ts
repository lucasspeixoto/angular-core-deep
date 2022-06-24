/* eslint-disable no-unused-vars */
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Inject,
  Injector,
  OnInit,
  ViewChild,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { COURSES } from '../db-data';
import { AppConfig, CONFIG_TOKEN } from './config';
import { CourseTitleComponent } from './course-title/course-title.component';
import { CoursesService } from './courses/courses.service';
import { HighlightedDirective } from './directives/highlighted.directive';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  courses: Course[] = COURSES;

  coursesTotal = this.courses.length;

  /**
   * { read: HighlightedDirective } Para situação
   * onde existem varios usos da diretiva no template
   */
  @ViewChild(HighlightedDirective, { read: HighlightedDirective })
  highlighted!: HighlightedDirective;

  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig,
    private injector: Injector,
  ) {}

  ngOnInit() {
    const htmlElement = createCustomElement(CourseTitleComponent, {
      injector: this.injector,
    });

    customElements.define('course-title', htmlElement);
  }

  ngAfterViewInit(): void {
    console.log(this.highlighted);
  }

  onEditCourse() {
    this.courses[1].category = 'ADVANCED';
  }

  onToggle(isHighlighted: boolean) {
    console.log(isHighlighted);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  save(course: any) {
    this.coursesService.saveCourse(course).subscribe(() => console.log('Course Saved!'));
  }

  toggleHighlight(event: EventEmitter<boolean | string>) {
    console.log(`Event: ${event}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onCourseSelected(course: any) {
    console.log(`COurse selected: ${course}`);
  }
}
