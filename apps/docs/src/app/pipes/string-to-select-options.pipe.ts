import { Pipe, PipeTransform } from '@angular/core';
import { FktAutocompleteOption } from 'frakton-ng/autocomplete';

@Pipe({
    name: 'stringToSelectOptions',
})
export class StringToSelectOptionsPipe implements PipeTransform {
    transform(values: string[]): FktAutocompleteOption[] {
        return values.map(item => ({
            label: item,
            value: item
        }))
    }
}
