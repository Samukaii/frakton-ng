import { Component, input } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktIconComponent } from 'frakton-ng/icon';
import { FktBadgeComponent } from 'frakton-ng/badge';
import { FktTooltipDirective } from 'frakton-ng/tooltip';

@Component({
	selector: 'different-elements-example',
	styleUrl: "./different-elements-example.component.scss",
	templateUrl: './different-elements-example.component.html',
	imports: [FktButtonComponent, FktIconComponent, FktBadgeComponent, FktTooltipDirective]
})
export class DifferentElementsExampleComponent {
	tooltipColor = input('primary');
}
