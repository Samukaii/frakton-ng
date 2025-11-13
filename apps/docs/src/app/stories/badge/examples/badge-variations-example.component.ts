import { Component } from '@angular/core';
import { FktBadgeComponent } from 'frakton-ng/badge';

@Component({
	selector: 'badge-variations-example',
	imports: [
		FktBadgeComponent
	],
	styles: `
		.container {
			display: flex;
			flex-direction: column;
			gap: var(--fkt-space-md);
		}

		.container__item {
			display: flex;
			flex-direction: column;
			gap: var(--fkt-space-xs);
		}

		.container__item h2 {
			font-size: var(--fkt-font-size-lg);
			font-weight: var(--fkt-font-semibold);
			border-bottom: solid 1px var(--fkt-color-neutral-200);
			padding-bottom: var(--fkt-space-3xs);
		}

		.container__item > div {
			display: flex;
			align-items: center;
			gap: var(--fkt-space-xs);
			flex-wrap: wrap;
		}
	`,
	template: `
		<div class="container">
			<div class="container__item">
				<h2>Opaque Variant</h2>
				<div>
					<fkt-badge text="Success" color="success" variant="opaque"/>
					<fkt-badge text="Danger" color="danger" variant="opaque"/>
					<fkt-badge text="Info" color="info" variant="opaque"/>
					<fkt-badge text="Warning" color="warning" variant="opaque"/>
				</div>
			</div>
			<div class="container__item">
				<h2>Faded Variant</h2>
				<div>
					<fkt-badge text="Success" color="success" variant="faded"/>
					<fkt-badge text="Danger" color="danger" variant="faded"/>
					<fkt-badge text="Info" color="info" variant="faded"/>
					<fkt-badge text="Warning" color="warning" variant="faded"/>
				</div>
			</div>
		</div>
	`
})
export class BadgeVariationsExampleComponent {

}