import { Pipe, PipeTransform } from '@angular/core';
import { kebabToHumanReadable } from '@/utils/kebab-to-human-readable';

@Pipe({
    name: 'humanizeDesignToken',
})
export class HumanizeDesignTokenPipe implements PipeTransform {
    transform(value: string, prefix = ''): string {
        return kebabToHumanReadable(value.replace(prefix, '').replace('fkt-button-', ''));
    }
}
