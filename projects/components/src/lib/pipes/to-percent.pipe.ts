import { Pipe, PipeTransform } from '@angular/core';
import { formatPercent } from '@angular/common';

@Pipe({
  name: 'toPercent'
})
export class ToPercentPipe implements PipeTransform {

  transform(value: number): unknown {
    return formatPercent(value, 'en')
  }

}
