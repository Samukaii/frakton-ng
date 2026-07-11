import {Component, input} from '@angular/core';
import {FktIconComponent} from 'frakton-ng/icon';
import {FktTagComponent} from 'frakton-ng/tag';
import {FktTooltipDirective} from 'frakton-ng/tooltip';
import {FktButtonComponent} from "frakton-ng/button";

@Component({
    selector: 'different-elements-example',
    styleUrl: './different-elements-example.component.scss',
    templateUrl: './different-elements-example.component.html',
    imports: [
        FktButtonComponent,
        FktIconComponent,
        FktTagComponent,
        FktTooltipDirective,
    ],
})
export class DifferentElementsExampleComponent {
    tooltipColor = input('primary');
}
