import { Component, signal } from '@angular/core';
import { FktNavigatorComponent } from 'frakton-ng/navigator';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { FktSpinnerComponent } from 'frakton-ng/spinner';

@Component({
	selector: 'loading-example',
	templateUrl: './loading-example.component.html',
	imports: [FktNavigatorComponent, FktButtonLegacyComponent, FktSpinnerComponent]
})
export class LoadingExampleComponent {
	protected isLoading = signal(false);

	protected toggleLoading() {
		this.isLoading.update(loading => !loading);
	}

	protected handlePrevious() {
		if (!this.isLoading()) {
			console.log('Previous navigation');
		}
	}

	protected handleNext() {
		if (!this.isLoading()) {
			console.log('Next navigation');
		}
	}
}
