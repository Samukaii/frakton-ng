import { Directive, inject } from '@angular/core';
import { FktAutocompleteOverlayDirective } from './fkt-autocomplete-overlay.directive';
import { FktAutocompleteSelectionDirective } from './fkt-autocomplete-selection.directive';
import { FktAutocompleteStoreService } from '../services/fkt-autocomplete-store.service';
import { FktAutocompleteContextDirective } from './fkt-autocomplete-context.directive';

@Directive({
    selector: 'input[fktAutocompleteSearch][fktAutocompleteKeyboard]',
    host: {
        '(keydown)': 'onKeydown($event)',
    },
})
export class FktAutocompleteKeyboardDirective {
    private readonly store = inject(FktAutocompleteStoreService);
    private readonly overlay = inject(FktAutocompleteOverlayDirective);
    private readonly selection = inject(FktAutocompleteSelectionDirective);
    private readonly context = inject(FktAutocompleteContextDirective);

    protected onKeydown(event: KeyboardEvent) {
        if (this.context.dropdownOpened())
            this.handleOpenedOverlayKeyboard(event);
        else this.handleClosedOverlayKeyboard(event);

        if (this.context.multiple()) this.handleMultipleKeyboard(event);
        else this.handleSingleKeyboard(event);
    }

    private handleClosedOverlayKeyboard(event: KeyboardEvent) {
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();

                this.context.openDropdown();
                this.store.activeDescendant.moveToFirst();

                break;
            case 'ArrowUp':
                event.preventDefault();

                this.context.openDropdown();
                this.store.activeDescendant.moveToLast();

                break;
            case 'Escape':
                event.preventDefault();

                this.selection.clearSelection();
                break;
        }
    }

    private handleOpenedOverlayKeyboard(event: KeyboardEvent) {
        const active = this.store.activeDescendant.active();

        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();

                this.store.activeDescendant.moveDown();

                break;
            case 'ArrowUp':
                event.preventDefault();

                this.store.activeDescendant.moveUp();

                break;
            case 'Home':
                event.preventDefault();

                this.store.activeDescendant.moveToFirst();

                break;
            case 'End':
                event.preventDefault();

                this.store.activeDescendant.moveToLast();

                break;
            case 'Tab':
                event.preventDefault();

                this.overlay.focusFirstElement();

                break;
            case 'Enter':
                event.preventDefault();

                if (active) this.selection.selectItem(active);

                break;
            case 'Escape':
                event.preventDefault();

                this.context.closeDropdown();

                break;
        }
    }

    private handleMultipleKeyboard(event: KeyboardEvent) {
        switch (event.key) {
            case 'Backspace':
                if (this.context.search().value()) break;

                this.selection.removeLastItem();

                break;
            case 'Enter':
                if (!this.selection.canAddTypedValue()) break;

                this.selection.addTypedValue();
                this.context.search().clear();

                break;
        }
    }

    private handleSingleKeyboard(event: KeyboardEvent) {
        switch (event.key) {
            case 'Enter':
                if (!this.context.freeText()) break;

                this.selection.addTypedValue();
                this.context.closeDropdown();

                break;
        }
    }
}
