import {Component, computed, inject, input} from '@angular/core';
import {FktIconName} from 'frakton-ng/icon';
import {Generic} from 'frakton-ng/internal/types';
import {FktAutocompleteContextDirective} from '../../directives/fkt-autocomplete-context.directive';
import {FktAutocompleteSelectionDirective} from '../../directives/fkt-autocomplete-selection.directive';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'fkt-autocomplete-action-button',
    imports: [FktButtonComponent],
    templateUrl: './fkt-autocomplete-action-button.component.html',
    styleUrl: './fkt-autocomplete-action-button.component.scss',
})
export class FktAutocompleteActionButtonComponent<
    Option extends Generic | string
> {
    protected readonly context = inject<
        FktAutocompleteContextDirective<Option>
    >(FktAutocompleteContextDirective);
    private readonly selection = inject<
        FktAutocompleteSelectionDirective<Option>
    >(FktAutocompleteSelectionDirective);
    disabled = input(false);

    protected readonly hasValue = computed(
        () => !!this.context.search().value() || this.selection.hasValue()
    );

    protected readonly actionButton = computed<{
        icon?: FktIconName;
        label: string;
        action?: () => void;
        anchor?: string;
        disabled: boolean;
    }>(() => {
        if (this.context.loading()) {
            return {
                icon: 'chevron-down',
                label: 'Loading options',
                anchor: 'loading-action',
                disabled: true,
            };
        }

        if (this.disabled()) {
            return {
                label: 'Field disabled',
                disabled: true,
            };
        }

        if (this.hasValue()) {
            return {
                icon: 'x-mark',
                label: 'Clear selection',
                anchor: 'clear-action',
                action: () => {
                    this.selection.clearSelection();
                    this.context.closeDropdown();
                },
                disabled: false,
            };
        }

        if (this.context.dropdownOpened()) {
            return {
                icon: 'chevron-up',
                label: 'Collapse options',
                anchor: 'collapse-action',
                action: () => this.context.closeDropdown(),
                disabled: false,
            };
        }

        return {
            icon: 'chevron-down',
            label: 'Expand options',
            anchor: 'expand-action',
            action: () => this.context.openDropdown(),
            disabled: false,
        };
    });
}
