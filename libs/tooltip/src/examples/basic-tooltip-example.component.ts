import { Component } from '@angular/core';
import { FktButtonComponent } from '@frakton-ng/button';
import { FktTooltipDirective } from '@frakton-ng/tooltip';

@Component({
	selector: 'basic-tooltip-example',
	template: `
		<div class="container">
			<h3 class="container__title">Basic Tooltips</h3>
			<div class="container__list">
				<fkt-button
					text="Hover me"
					theme="stroked"
					color="primary"
					fktTooltip="This is a basic tooltip message"
				></fkt-button>

				<fkt-button
					text="Info Button"
					theme="raised"
					color="primary"
					fktTooltip="Click this button to perform an action"
				></fkt-button>

				<fkt-button
					text="Disabled State"
					theme="stroked"
					color="primary"
					[disabled]="true"
					fktTooltip="This button is disabled"
				></fkt-button>
			</div>
		</div>
	`,
	styles: `
		h3 {
			margin: 0;
		}
		.container {
			display: flex;
			flex-direction: column;
			gap: 1rem;

			.container__list {
				display: flex;
				flex-wrap: wrap;
				gap: 1rem;
			}

			.container__title {
				font-weight: var(--font-semibold);
				font-size: var(--font-size-lg);
			}
		}
	`,
	standalone: true,
	imports: [FktButtonComponent, FktTooltipDirective]
})
export class BasicTooltipExampleComponent {
}
