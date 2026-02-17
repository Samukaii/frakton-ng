import { Component } from '@angular/core';
import { FktButtonGroupComponent, FktButtonGroupOption } from 'frakton-ng/button-group';

@Component({
  selector: 'fkt-button-group-input-driven',
    imports: [
        FktButtonGroupComponent
    ],
  templateUrl: './button-group-input-driven.component.html',
  styleUrl: './button-group-input-driven.component.scss',
})
export class ButtonGroupInputDrivenComponent {
    options: FktButtonGroupOption[] = [
        {
            id: 'list',
            label: "List",
            icon: 'list-bullet'
        },
        {
            id: 'grid',
            label: "Grid",
            icon: 'squares-2x2'
        },
        {
            id: 'cards',
            label: "Cards",
            icon: 'square-3-stack-3d'
        }
    ];



}
