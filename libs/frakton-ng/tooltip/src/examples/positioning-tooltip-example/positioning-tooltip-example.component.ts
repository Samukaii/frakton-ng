import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktTooltipDirective } from 'frakton-ng/tooltip';

@Component({
	selector: 'positioning-tooltip-example',
	styleUrl: './positioning-tooltip-example.component.scss',
	templateUrl: './positioning-tooltip-example.component.html',
	imports: [FktButtonComponent, FktTooltipDirective]
})
export class PositioningTooltipExampleComponent {
}
