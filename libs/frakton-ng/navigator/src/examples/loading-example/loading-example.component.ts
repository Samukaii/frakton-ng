import { Component, signal } from '@angular/core';
import { FktNavigatorComponent } from 'frakton-ng/navigator';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktSpinnerComponent } from 'frakton-ng/spinner';

@Component({
	selector: 'loading-example',
	template: `
		<div class="space-y-4">
			<fkt-button
				(click)="toggleLoading()"
				[text]="isLoading() ? 'Stop Loading' : 'Start Loading'"
			/>
			<fkt-navigator
				[canGoToPrevious]="!isLoading()"
				[canGoToNext]="!isLoading()"
				(previous)="handlePrevious()"
				(next)="handleNext()"
			>
				@if (isLoading()) {
					<fkt-spinner/>
					<div class="text-center text-gray-500">
						Loading...
					</div>
				}
			</fkt-navigator>

		</div>
	`,
	imports: [FktNavigatorComponent, FktButtonComponent, FktSpinnerComponent]
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
