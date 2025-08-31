import { Component, input } from '@angular/core';
import { FktSpinnerComponent } from '../../fkt-spinner.component';
import { FktColor } from '../../../../shared/types';

@Component({
	selector: 'fkt-spinner-example-custom-configuration',
	imports: [
		FktSpinnerComponent
	],
	template: `
		<div class="container">
			<div class="container__item">
				<fkt-spinner
					[size]="size()"
					[stroke]="8"
					color="green"
				/>
				<p>Thick stroke (8px)</p>
			</div>
			<div class="container__item">
				<fkt-spinner
					[size]="size()"
					[stroke]="2"
					color="primary"
				/>
				<p>Thin stroke (2px)</p>
			</div>
		</div>
	`,
	styleUrl: './fkt-spinner-example-custom-configuration.component.scss'
})
export class FktSpinnerExampleCustomConfigurationComponent {
	size = input(96);
	color = input<FktColor>('primary');
}
