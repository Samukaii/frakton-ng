import { Component, input, output } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';

@Component({
	selector: 'fkt-navigator',
	imports: [FktButtonComponent],
	templateUrl: './fkt-navigator.component.html',
	styleUrl: './fkt-navigator.component.scss',
})
export class FktNavigatorComponent {
	next = output();
	previous = output();
	canGoToPrevious = input(true);
	canGoToNext = input(true);
}
