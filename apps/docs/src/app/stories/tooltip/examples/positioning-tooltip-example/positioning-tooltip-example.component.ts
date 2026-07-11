import {Component, input} from '@angular/core';
import {FktTooltipDirective} from 'frakton-ng/tooltip';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'positioning-tooltip-example',
    styleUrl: './positioning-tooltip-example.component.scss',
    templateUrl: './positioning-tooltip-example.component.html',
    imports: [FktButtonComponent, FktTooltipDirective],
})
export class PositioningTooltipExampleComponent {
    tooltipColor = input('primary');
}
