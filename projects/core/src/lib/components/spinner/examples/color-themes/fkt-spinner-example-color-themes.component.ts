import { Component, input } from '@angular/core';
import { FktSpinnerComponent } from '../../fkt-spinner.component';
import { FktColor } from '../../../../shared/types';

@Component({
	selector: 'fkt-spinner-example-color-themes',
	imports: [
		FktSpinnerComponent
	],
	template: `
		<div class="container">
			<div class="container__item">
				<fkt-spinner [size]="size()" [stroke]="stroke()" color="primary"/>
				<p class="mt-2 text-sm text-gray-600">Primary</p>
			</div>
			<div class="container__item">
				<fkt-spinner [size]="size()" [stroke]="stroke()" color="green"/>
				<p class="mt-2 text-sm text-gray-600">Green</p>
			</div>
			<div class="container__item">
				<fkt-spinner [size]="size()" [stroke]="stroke()" color="yellow"/>
				<p class="mt-2 text-sm text-gray-600">Yellow</p>
			</div>
			<div class="container__item">
				<fkt-spinner [size]="size()" [stroke]="stroke()" color="red"/>
				<p class="mt-2 text-sm text-gray-600">Red</p>
			</div>
		</div>
	`,
	styleUrl: './fkt-spinner-example-color-themes.component.scss'
})
export class FktSpinnerExampleColorThemesComponent {
	size = input(40);
	stroke = input(4);
}
