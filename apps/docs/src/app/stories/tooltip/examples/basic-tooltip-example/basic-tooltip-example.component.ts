import {Component, input} from '@angular/core';
import {FktTooltipDirective} from 'frakton-ng/tooltip';
import {FktColor} from 'frakton-ng/core';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'basic-tooltip-example',
    styleUrl: './basic-tooltip-example.component.scss',
    templateUrl: './basic-tooltip-example.component.html',
    imports: [FktButtonComponent, FktTooltipDirective],
})
export class BasicTooltipExampleComponent {
    tooltipColor = input<FktColor>('primary');
}
