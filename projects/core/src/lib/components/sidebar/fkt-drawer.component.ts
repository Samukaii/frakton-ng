import { Component, computed, input, output } from '@angular/core';

@Component({
	selector: 'fkt-drawer',
	imports: [],
	templateUrl: './fkt-drawer.component.html',
	styleUrl: './fkt-drawer.component.scss'
})
export class FktDrawerComponent {
	opened = input(false);
	mode = input<'overlay' | 'push'>('push');
	width = input('250px');
	backdropClick = output();

	protected canShowOverlay = computed(() => {
		if(this.mode() === 'push') return false;

		return this.opened();
	});
}
