import { Component, input } from '@angular/core';
import { FktSpinnerComponent } from 'frakton-ng/spinner';
import { FktColor } from 'frakton-ng/core';

@Component({
	selector: 'fkt-spinner-example-custom-configuration',
	imports: [
		FktSpinnerComponent
	],
	templateUrl: './fkt-spinner-example-custom-configuration.component.html',
	styleUrl: './fkt-spinner-example-custom-configuration.component.scss'
})
export class FktSpinnerExampleCustomConfigurationComponent {
	size = input(96);
	color = input<FktColor>('primary');
}
