import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FktSideMenuService {
	opened = signal(false);

	open() {
		this.opened.set(true);
	}

	close() {
		this.opened.set(false);
	}

	toggle() {
		this.opened.update(value => !value);
	}
}
