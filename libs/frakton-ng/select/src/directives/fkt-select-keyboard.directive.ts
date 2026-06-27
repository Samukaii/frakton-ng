import { Directive, inject } from '@angular/core';
import { FktSelectContextDirective } from './fkt-select-context.directive';
import { FktSelectSelectionDirective } from './fkt-select-selection.directive';
import { FktSelectStoreService } from '../services/fkt-select-store.service';

@Directive({
    selector: '[fktSelectControl][fktSelectKeyboard]',
    host: {
        '(keydown)': 'onKeydown($event)',
    },
})
export class FktSelectKeyboardDirective {
    private readonly context = inject(FktSelectContextDirective);
    private readonly selection = inject(FktSelectSelectionDirective);
    private readonly store = inject(FktSelectStoreService);

    protected onKeydown(event: KeyboardEvent) {
        if (!this.context.dropdownOpened()) {
            if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.context.openDropdown();
                this.store.activeDescendant.moveToFirst();
            } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                this.context.openDropdown();
                this.store.activeDescendant.moveToLast();
            }
            return;
        }

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
            case 'Enter':
            case ' ':
                event.preventDefault();
                if (this.store.activeDescendant.active()) {
                    this.selection.select(
                        this.store.activeDescendant.active()!
                    );
                }
                break;
            case 'Escape':
                event.preventDefault();
                this.context.closeDropdown();
                break;
        }
    }
}
