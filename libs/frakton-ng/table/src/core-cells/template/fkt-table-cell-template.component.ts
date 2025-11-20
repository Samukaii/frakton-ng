import { Component, input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
	selector: 'fkt-table-cell-template',
	imports: [NgTemplateOutlet],
	template: `
		<ng-container 
			*ngTemplateOutlet="templateRef(); context: context()"
		></ng-container>
	`,
	styleUrl: './fkt-table-cell-template.component.scss'
})
export class FktTableCellTemplateComponent {
	templateRef = input.required<TemplateRef<any>>();
	context = input<any>({});
}