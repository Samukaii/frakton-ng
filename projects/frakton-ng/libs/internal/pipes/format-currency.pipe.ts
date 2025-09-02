import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {
  transform(value: number): unknown {
    return value.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	})
  }
}
