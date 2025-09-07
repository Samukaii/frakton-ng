import { Component, input } from '@angular/core';
import { FktNavigatorComponent } from 'frakton-ng/navigator';

@Component({
	selector: 'basic-example',
	template: `
		<fkt-navigator
			[canGoToPrevious]="canGoToPrevious()"
			[canGoToNext]="canGoToNext()"
			(previous)="goToPrevious()"
			(next)="goToNext()"
		/>
	`,
	standalone: true,
	imports: [FktNavigatorComponent]
})
export class BasicExampleComponent {
	protected canGoToPrevious = input(true);
	protected canGoToNext = input(true);

	protected goToPrevious() {
		console.log('Navigate to previous');
	}

	protected goToNext() {
		console.log('Navigate to next');
	}
}
