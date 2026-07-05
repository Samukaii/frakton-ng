import { Component, input } from '@angular/core';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { FktTooltipDirective } from 'frakton-ng/tooltip';

@Component({
	selector: 'positioning-tooltip-example',
	styleUrl: './positioning-tooltip-example.component.scss',
	templateUrl: './positioning-tooltip-example.component.html',
    imports: [FktButtonLegacyComponent, FktTooltipDirective]
})
export class PositioningTooltipExampleComponent {
	tooltipColor = input('primary');
}
