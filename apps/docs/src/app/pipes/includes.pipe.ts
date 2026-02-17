import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'includes',
})
export class IncludesPipe implements PipeTransform {
  transform(list: any[], value: any): unknown {
    return list.includes(value);
  }
}
