import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MobileMenuService {
    private opened = signal(false);

    isOpened = this.opened.asReadonly();

    toggle() {
        this.opened.update(opened => !opened);
    }

    close() {
        this.opened.set(false);
    }
}
