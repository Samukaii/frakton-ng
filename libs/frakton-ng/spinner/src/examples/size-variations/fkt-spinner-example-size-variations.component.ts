import { Component, input } from '@angular/core';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { FktColor } from 'frakton-ng/core';

@Component({
	selector: 'fkt-spinner-example-size-variations',
	imports: [
		FktSpinnerComponent
	],
	templateUrl: './fkt-spinner-example-size-variations.component.html',
	styleUrl: './fkt-spinner-example-size-variations.component.scss'
})
export class FktSpinnerExampleSizeVariationsComponent {
	stroke = input(4);
	color = input<FktColor>('primary');
}
