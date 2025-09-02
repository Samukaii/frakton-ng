import { Component, input, signal } from '@angular/core';
import { FktSpinnerComponent } from '@frakton-ng/spinner';
import { FktButtonComponent } from '@frakton-ng/button';
import { FktIconComponent } from '@frakton-ng/icon';
import { FktColor } from '@frakton-ng/core';

@Component({
	selector: 'fkt-spinner-example-loading-state',
	imports: [
		FktSpinnerComponent,
		FktButtonComponent,
		FktIconComponent
	],
	template: `
		<div class="container">
			@if (isLoading()) {
				<div class="container__loading">
					<fkt-spinner [size]="size()" [stroke]="stroke()" [color]="color()" />
					<span>Loading data...</span>
				</div>
			} @else {
				<div class="container__success">
					<fkt-icon
						name="check"
					/>
					Data loaded successfully!
				</div>
			}

			<fkt-button
				(click)="toggleLoading()"
				theme="stroked"
				[text]="isLoading() ? 'Stop Loading' : 'Start Loading'"
			>
			</fkt-button>
		</div>
	`,
	styleUrl: './fkt-spinner-example-loading-state.component.scss'
})
export class FktSpinnerExampleLoadingStateComponent {
	size = input(40);
	stroke = input(4);
	color = input<FktColor>('primary');

	protected isLoading = signal(false);

	protected toggleLoading() {
		this.isLoading.update(loading => !loading);
	}
}
