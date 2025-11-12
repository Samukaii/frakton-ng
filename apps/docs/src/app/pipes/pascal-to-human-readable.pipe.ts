import { Pipe, PipeTransform } from '@angular/core';
import { pascalToHumanReadable } from '../utils/pascal-to-human-readable';

@Pipe({
	name: 'pascalToHumanReadable'
})
export class PascalToHumanReadablePipe implements PipeTransform {
	transform(value: string): string {
		return pascalToHumanReadable(value)
	}
}
