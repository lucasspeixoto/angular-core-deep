/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'course-title',
  templateUrl: './course-title.component.html',
  styleUrls: ['./course-title.component.css'],
})
export class CourseTitleComponent implements OnInit {
  @Input()
  title!: string;

  constructor() {}

  ngOnInit() {}
}
