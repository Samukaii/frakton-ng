import { Component, computed, input, output } from '@angular/core';

@Component({
	selector: 'fkt-sidebar',
	imports: [],
	templateUrl: './fkt-sidebar.component.html',
	styleUrl: './fkt-sidebar.component.scss'
})
export class FktSidebarComponent {
	opened = input(false);
	mode = input<'overlay' | 'push'>('push');
	width = input('250px');
	backdropClick = output();

	protected canShowOverlay = computed(() => {
		if(this.mode() === 'push') return false;

		return this.opened();
	});
}
