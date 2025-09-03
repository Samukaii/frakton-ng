import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCents'
})
export class FormatCentsPipe implements PipeTransform {

  transform(value: number): unknown {
	  return (value / 100).toLocaleString('pt-BR', {
		  style: 'currency',
		  currency: 'BRL',
	  })
  }

}
