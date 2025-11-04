import { Component, computed, input, output, viewChild, ViewContainerRef } from '@angular/core';
import { FktFocusTrapDirective } from 'frakton-ng/focus-trap';

@Component({
	selector: 'fkt-dialog-host',
	template: `
		<div class="backdrop" (click)="backdropClick.emit()"></div>
		<div [style]="computedStyles()" fktFocusTrap (keydown.esc)="$event.stopPropagation(); escapeKeyDown.emit()"
			 class="container">
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
			top: 0;
			left: 0;
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
		}
	`,
	host: {
		'[id]': 'id()'
	},
	imports: [FktFocusTrapDirective]

})
export class DialogAnchorComponent {
	backdropClick = output();
	escapeKeyDown = output();
	id = input<string | undefined>('fit-content');
	stackIndex = input<number | undefined>(9999);
	styles = input<Record<string, string> | undefined>({});
	height = input<string | undefined>('fit-content');
	width = input<string | undefined>('100%');
	maxHeight = input<string | undefined>('90vh');
	maxWidth = input<string | undefined>('1200px');
	borderRadius = input<string | undefined>('1rem');
	backgroundColor = input<string | undefined>('var(--fkt-color-modal-background)');
	padding = input<string | undefined>('1rem');

	container = viewChild.required('container', {read: ViewContainerRef});

	private focusTrap = viewChild.required(FktFocusTrapDirective);

	protected computedStyles = computed(() => {
		return {
			'height': this.height(),
			'width': this.width(),
			'max-width': this.maxWidth(),
			'max-height': this.maxHeight(),
			'border-radius': this.borderRadius(),
			'background-color': this.backgroundColor(),
			'padding': this.padding(),
			...(this.styles() ?? {})
		}
	});

	public restoreFocus() {
		this.focusTrap().restoreFocus();
	}
}

