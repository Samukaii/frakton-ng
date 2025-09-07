import { Component } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';
import { FktTooltipDirective } from 'frakton-ng/tooltip';

@Component({
	selector: 'basic-tooltip-example',
	styleUrl: './basic-tooltip-example.component.scss',
	templateUrl: './basic-tooltip-example.component.html',
	imports: [FktButtonComponent, FktTooltipDirective]
})
export class BasicTooltipExampleComponent {
}
