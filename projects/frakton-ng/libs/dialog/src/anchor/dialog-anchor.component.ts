import { Component, input, output, viewChild, ViewContainerRef } from '@angular/core';
import { injectWindowScroll } from '@frakton-ng/internal/di';

@Component({
    selector: 'fkt-dialog-host',
    template: `
        <div class="backdrop" (click)="backdropClick.emit()"></div>
        <div class="container">
            <ng-template #container></ng-template>
        </div>
    `,
    styles: `
		* {
			box-sizing: border-box;
		}

        :host {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

			top: var(--top);
			left: var(--left);
        }

        .backdrop {
            background-color: #0005;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
        }

        .container {
			overflow-x: hidden;
			display: flex;
			flex-direction: column;
			z-index: 20;
            padding: var(--padding);
            width: var(--width);
            height: var(--height);
            max-width: var(--max-width);
            max-height: var(--max-height);
            background-color: var(--background-color);
			border-radius: var(--border-radius);
        }
    `,
    standalone: true,
	host: {
		'[style.--height]': 'height()',
		'[style.--width]': 'width()',
		'[style.--max-width]': 'maxWidth()',
		'[style.--max-height]': 'maxHeight()',
		'[style.--top]': 'windowScroll().y + "px"',
		'[style.--left]': 'windowScroll().x + "px"',
		'[style.--border-radius]': 'borderRadius()',
		'[style.--background-color]': 'backgroundColor()',
		'[style.--padding]': 'padding()',
	}
})
export class DialogAnchorComponent  {
    backdropClick = output();
	height = input('fit-content');
	width = input('100%');
	maxHeight = input('90vh');
	maxWidth = input('1200px');
	borderRadius = input('1rem');
	backgroundColor = input('white');
	padding = input('1rem');

    container = viewChild.required('container', { read: ViewContainerRef });

	protected windowScroll = injectWindowScroll();
}
