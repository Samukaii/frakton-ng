import { Component, input } from '@angular/core';
import { FktSpinnerComponent } from '@frakton-ng/spinner';
import { FktColor } from '@frakton-ng/core';

@Component({
	selector: 'fkt-spinner-example-size-variations',
	imports: [
		FktSpinnerComponent
	],
	template: `
		<div class="container">
			<div class="container__item">
				<fkt-spinner [size]="72" [stroke]="stroke()" [color]="color()"/>
				<p>Large (72px)</p>
			</div>
			<div class="container__item">
				<fkt-spinner [size]="48" [stroke]="stroke()" [color]="color()"/>
				<p>Medium (48px)</p>
			</div>
			<div class="container__item">
				<fkt-spinner [size]="24" [stroke]="stroke()" [color]="color()"/>
				<p>Small (24px)</p>
			</div>
		</div>
	`,
	styleUrl: './fkt-spinner-example-size-variations.component.scss'
})
export class FktSpinnerExampleSizeVariationsComponent {
	stroke = input(4);
	color = input<FktColor>('primary');
}
