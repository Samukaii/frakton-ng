import { Component, inject } from '@angular/core';
import { FktIconComponent } from 'frakton-ng/icon';
import { Generic } from 'frakton-ng/internal/types';
import { injectCompatFormStateWithoutNative } from '../../../../internal/di/inject-compat-form-state';
import { FktAutocompleteContextDirective } from '../../directives/fkt-autocomplete-context.directive';
import { FktAutocompleteSelectionDirective } from '../../directives/fkt-autocomplete-selection.directive';

@Component({
    selector: 'fkt-autocomplete-chips',
    imports: [FktIconComponent],
    templateUrl: './fkt-autocomplete-chips.component.html',
    styleUrl: './fkt-autocomplete-chips.component.scss',
})
export class FktAutocompleteChipsComponent<
    Option extends Generic | string,
> {
    protected readonly formState = injectCompatFormStateWithoutNative();
    protected readonly context = inject<FktAutocompleteContextDirective<Option>>(
        FktAutocompleteContextDirective
    );
    protected readonly selection = inject<
        FktAutocompleteSelectionDirective<Option>
    >(FktAutocompleteSelectionDirective);
}
