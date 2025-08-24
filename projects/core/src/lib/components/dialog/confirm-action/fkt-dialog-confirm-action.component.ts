import { Component, computed, input } from '@angular/core';
import { FktButtonsListComponent } from '../../buttons-list';
import { FktIconComponent } from '../../icon';
import { FktButtonAction } from '../../button';

@Component({
	selector: 'fkt-dialog-confirm-action',
	imports: [FktButtonsListComponent, FktIconComponent],
	templateUrl: './fkt-dialog-confirm-action.component.html',
	styleUrl: './fkt-dialog-confirm-action.component.scss',
})
export class FktDialogConfirmActionComponent {
	title = input.required<string>();
	description = input<string>();
	actions = input<
		| {
				primary?: Partial<FktButtonAction>;
				secondary?: Partial<FktButtonAction>;
		  }
		| undefined
	>();

	protected confirmActions = computed(() => {
		const { primary, secondary } = this.actions() || {};

		const primaryAction: FktButtonAction = {
			identifier: 'primary',
			text: 'Confirmar',
			color: 'red',
			...primary,
		};
		const secondaryAction: FktButtonAction = {
			identifier: 'secondary',
			text: 'Voltar',
			theme: 'stroked',
			...secondary,
		};

		return [primaryAction, secondaryAction];
	});
}
