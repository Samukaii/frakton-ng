import { effect, Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ThemeService {
  currentTheme = signal<'light' | 'dark'>('light');

  private readonly changeTheme = effect(() => {
	  document.body.setAttribute('data-fkt-theme', this.currentTheme());
  })

  toggleTheme() {
	  this.currentTheme.set(this.currentTheme() === 'light' ? 'dark' : 'light');
  }
}
