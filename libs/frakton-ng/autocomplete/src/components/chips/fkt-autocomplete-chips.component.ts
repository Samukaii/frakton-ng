import { Component, inject, input, TemplateRef } from '@angular/core';
import { FktIconComponent } from 'frakton-ng/icon';
import { Generic } from 'frakton-ng/internal/types';
import { injectCompatFormStateWithoutNative } from 'frakton-ng/internal/di';
import { FktAutocompleteContextDirective } from '../../directives/fkt-autocomplete-context.directive';
import { FktAutocompleteSelectionDirective } from '../../directives/fkt-autocomplete-selection.directive';
import { NgTemplateOutlet } from '@angular/common';
import { FktAutocompleteChipContext } from '../../fkt-autocomplete.types';

@Component({
    selector: 'fkt-autocomplete-chips',
    imports: [FktIconComponent, NgTemplateOutlet],
    templateUrl: './fkt-autocomplete-chips.component.html',
    styleUrl: './fkt-autocomplete-chips.component.scss',
})
export class FktAutocompleteChipsComponent<
    Option extends Generic | string,
> {
    readonly template = input<TemplateRef<FktAutocompleteChipContext<Option>>>();

    protected readonly formState = injectCompatFormStateWithoutNative();
    protected readonly context = inject<FktAutocompleteContextDirective<Option>>(
        FktAutocompleteContextDirective
    );
    protected readonly selection = inject<
        FktAutocompleteSelectionDirective<Option>
    >(FktAutocompleteSelectionDirective);

    protected getTemplateContext(
        option: FktAutocompleteChipContext<Option>['$implicit']
    ): FktAutocompleteChipContext<Option> {
        return { $implicit: option };
    }
}
