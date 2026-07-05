import { Component, input } from '@angular/core';
import { FktButtonLegacyComponent } from 'frakton-ng/button-legacy';
import { FktTooltipDirective } from 'frakton-ng/tooltip';
import { FktColor } from 'frakton-ng/core';

@Component({
	selector: 'basic-tooltip-example',
	styleUrl: './basic-tooltip-example.component.scss',
	templateUrl: './basic-tooltip-example.component.html',
	imports: [FktButtonLegacyComponent, FktTooltipDirective]
})
export class BasicTooltipExampleComponent {
	tooltipColor = input<FktColor>('primary')
}
