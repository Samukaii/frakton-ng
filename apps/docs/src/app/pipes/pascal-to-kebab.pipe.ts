import { Pipe, PipeTransform } from '@angular/core';
import { pascalToHumanReadable } from '../utils/pascal-to-human-readable';
import { pascalToKebab } from '@/utils/pascal-to-kebab';

@Pipe({
	name: 'pascalToKebab'
})
export class PascalToKebabPipe implements PipeTransform {
	transform(value: string): string {
		return pascalToKebab(value)
	}
}
