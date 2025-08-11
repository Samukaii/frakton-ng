import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'toClass',
})
export class ToClassPipe implements PipeTransform {
	transform(value: string[]) {
		return value.join(' ');
	}
}
