import { Component } from '@angular/core';
import {
    FktButtonColor,
    FktButtonAppearance,
    fktButtonAppearances,
    fktButtonColors,
    FktButtonComponent,
    FktButtonShape,
    fktButtonShapes,
} from 'frakton-ng/button';
import { capitalize } from '@/utils/capitalize';

interface ButtonVariant {
    title: string;
    value: FktButtonShape;
    appearances: {
        title: string;
        value: FktButtonAppearance;
        colors: {
            title: string;
            value: FktButtonColor;
        }[];
    }[];
}

@Component({
    selector: 'fkt-text-variants-example',
    imports: [FktButtonComponent],
    templateUrl: './text-variants-example.component.html',
    styleUrl: './text-variants-example.component.scss',
})
export class TextVariantsExampleComponent {
    private buttonShapes = fktButtonShapes.filter(
        (shape) => shape !== 'default'
    );

    private buttonAppearances = fktButtonAppearances.filter(
        (appearance) => appearance !== 'default'
    );

    private buttonColors = fktButtonColors.filter(
        (shape) => shape !== 'default'
    );

    protected shapes: ButtonVariant[] = this.buttonShapes.map((value) => ({
        title: capitalize(value),
        value,
        appearances: this.buttonAppearances.map((value) => ({
            title: capitalize(value),
            value,
            colors: this.buttonColors.map((value) => ({
                title: capitalize(value),
                value,
            })),
        })),
    }));
}
