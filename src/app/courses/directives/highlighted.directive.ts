/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Directive,
  EventEmitter,
  Host,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

import { CoursesService } from '../services/courses.service';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl',
})
export class HighlightedDirective {
  @Input()
  highlighted?: boolean | string;

  @Output()
  toggleHighlight = new EventEmitter();

  // eslint-disable-next-line no-unused-vars
  constructor(@Host() private coursesService: CoursesService) {
    console.log(`coursesService highlighted ${coursesService.id}`);
    //console.log('Highlighted directive created');
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.highlighted;
  }

  @HostListener('mouseover', ['$event'])
  mouseOver($event: Event) {
    console.log($event);
    this.highlighted = true;
    this.toggleHighlight.emit(this.highlighted);
  }
  @HostListener('mouseleave')
  mouseLeave() {
    this.highlighted = false;
    this.toggleHighlight.emit(this.highlighted);
  }

  @HostBinding('attr.disabled')
  get disabled() {
    return 'true';
  }

  /* @HostBinding('className')
  get cssClasses() {
    return 'highlighted';
  }
 */
  /* @HostBinding('style.border')
  get cssClasses() {
    return '2px solid green';
  } */

  toggle() {
    this.highlighted = !this.highlighted;
    this.toggleHighlight.emit(this.highlighted);
  }
}
