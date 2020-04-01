import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSet'
})
export class DateSetPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
