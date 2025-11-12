import { Component, input } from '@angular/core';
import { FktSpinnerComponent } from 'frakton-ng/spinner';

@Component({
	selector: 'fkt-spinner-example-color-themes',
	imports: [
		FktSpinnerComponent
	],
	templateUrl: './fkt-spinner-example-color-themes.component.html',
	styleUrl: './fkt-spinner-example-color-themes.component.scss'
})
export class FktSpinnerExampleColorThemesComponent {
	size = input(40);
	stroke = input(4);
}
