import { Directive, input, output } from '@angular/core';

@Directive({
    selector: 'fkt-autocomplete[fktAutocompleteInfiniteLoading]',
})
export class FktAutocompleteInfiniteLoadingDirective {
    hasEnded = input.required<boolean>();
    loadMore = output<void>();
}
