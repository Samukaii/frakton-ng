import { Component, input } from '@angular/core';
import { FktColor } from '../../shared/types';

@Component({
	selector: 'fkt-spinner',
	imports: [],
	templateUrl: './fkt-spinner.component.html',
	styleUrl: './fkt-spinner.component.scss',
})
export class FktSpinnerComponent {
	size = input(40);
	stroke = input(4);
	color = input<FktColor>('primary');
}
