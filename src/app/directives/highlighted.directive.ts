/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Directive,
  EventEmitter,
  HostBinding,
  //HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl',
})
export class HighlightedDirective {
  @Input()
  highlighted?: boolean | string;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() {
    //console.log('Highlighted directive created');
  }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.highlighted;
  }

  /* @HostListener('mouseover', ['$event'])
  mouseOver($event: Event) {
    console.log($event);
    this.highlighted = true;
    this.toggleHighlight.emit(this.highlighted);
  }
  @HostListener('mouseleave')
  mouseLeave() {
    this.highlighted = false;
    this.toggleHighlight.emit(this.highlighted);
  } */

  /* @HostBinding('attr.disabled')
  get disabled() {
    return 'true';
  } */

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
