import { Component, input } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { FktIconComponent } from 'frakton-ng/icon';

@Component({
	selector: 'positioning-tooltip-example',
	styleUrl: './positioning-tooltip-example.component.scss',
	templateUrl: './positioning-tooltip-example.component.html',
	imports: [FktButtonComponent, FktTooltipDirective, FktIconComponent]
})
export class PositioningTooltipExampleComponent {
	tooltipColor = input('primary');
}
