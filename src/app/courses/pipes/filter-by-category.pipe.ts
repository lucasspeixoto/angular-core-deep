/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter-by-category',
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return null;
  }
}
