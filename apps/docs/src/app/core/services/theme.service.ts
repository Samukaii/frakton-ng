import { effect, Injectable, linkedSignal, signal } from '@angular/core';
import { MarkUsed } from 'frakton-ng/internal/utils';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
  currentTheme = linkedSignal<'light' | 'dark'>(() => {
      return localStorage.getItem('current-theme') === 'dark' ? 'dark' : 'light';
  });

  @MarkUsed()
  protected readonly changeTheme = effect(() => {
	  document.body.setAttribute('data-fkt-theme', this.currentTheme());
      localStorage.setItem('current-theme', this.currentTheme());
  })

  toggleTheme() {
	  this.currentTheme.set(this.currentTheme() === 'light' ? 'dark' : 'light');
  }
}
