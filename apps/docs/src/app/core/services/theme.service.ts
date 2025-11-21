import { DOCUMENT, effect, inject, Injectable, linkedSignal, PLATFORM_ID } from '@angular/core';
import { MarkUsed } from 'frakton-ng/internal/utils';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private readonly platform = inject(PLATFORM_ID);
    private readonly document = inject(DOCUMENT);

    currentTheme = linkedSignal<'light' | 'dark'>(() => {
        if(!isPlatformBrowser(this.platform)) return 'light';

        return localStorage.getItem('current-theme') === 'dark' ? 'dark' : 'light';
    });

    @MarkUsed()
    protected readonly changeTheme = effect(() => {
        this.document.body.setAttribute('data-fkt-theme', this.currentTheme());

        if(!isPlatformBrowser(this.platform)) return;

        localStorage.setItem('current-theme', this.currentTheme());
    })

    toggleTheme() {
        this.currentTheme.set(this.currentTheme() === 'light' ? 'dark' : 'light');
    }
}
