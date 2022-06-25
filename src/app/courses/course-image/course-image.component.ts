/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css'],
})
export class CourseImageComponent implements OnInit {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('src')
  imageUrl!: string;

  constructor() {}

  ngOnInit() {}
}
