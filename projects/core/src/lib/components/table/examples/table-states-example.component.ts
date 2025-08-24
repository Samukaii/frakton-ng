import { Component, computed, input, signal } from '@angular/core';
import { TableComponent } from '../table.component';
import { FktButtonAction, FktButtonComponent } from '../../button';
import { createUserActions, createUserClasses, createUserColumns, mockUsers, User } from './table-mock-data';
import { FktTableActionFn, FktTableClassesFn, FktTableColumnFn } from '../fkt-table.types';
import { FktNoResults } from '../../no-results';

type TableState = 'loading' | 'empty' | 'populated';

@Component({
	selector: 'table-states-example',
	template: `
		<div class="space-y-4">
			<!-- State Control Buttons -->
			<div class="flex gap-2 p-4 bg-gray-50 rounded-lg">
				<fkt-button
					[text]="'Loading State'"
					[theme]="currentState() === 'loading' ? 'raised' : 'stroked'"
					[color]="'primary'"
					[disabled]="false"
					(click)="setState('loading')"
				/>
				<fkt-button
					[text]="'Empty State'"
					[theme]="currentState() === 'empty' ? 'raised' : 'stroked'"
					[color]="'yellow'"
					[disabled]="false"
					(click)="setState('empty')"
				/>
				<fkt-button
					[text]="'Populated State'"
					[theme]="currentState() === 'populated' ? 'raised' : 'stroked'"
					[color]="'green'"
					[disabled]="false"
					(click)="setState('populated')"
				/>
			</div>

			<!-- Table -->
			<fkt-table
				[data]="tableData()"
				[columnsFn]="columnsFn()"
				[classesFn]="classesFn()"
				[actionsFn]="actionsFn()"
				[mainAction]="mainAction()"
				[loading]="isLoading()"
				[noHeaderWhenEmpty]="noHeaderWhenEmpty()"
				[noResults]="noResults()"
			/>
		</div>
	`,
	standalone: true,
	imports: [TableComponent, FktButtonComponent]
})
export class TableStatesExampleComponent {
	// Input properties that can be controlled from stories
	data = input<User[]>(mockUsers);
	columnsFn = input<FktTableColumnFn<User>>(createUserColumns);
	classesFn = input<FktTableClassesFn<User>>(createUserClasses);
	actionsFn = input<FktTableActionFn<User>>(createUserActions);
	mainAction = input<FktButtonAction | undefined>({
		identifier: 'add-user',
		text: 'Add User',
		theme: 'raised',
		color: 'primary',
		icon: 'plus',
		iconPosition: 'left',
		click: () => this.handleMainAction()
	});
	loading = input<boolean>(false);
	noHeaderWhenEmpty = input<boolean>(true);
	noResults = input<FktNoResults>({
		label: 'No data to display',
		description: 'The table is currently empty. Try loading some data or adding new records.',
		icon: { name: 'table-cells', size: '96px' },
		action: {
			identifier: 'load-data',
			text: 'Load Sample Data',
			theme: 'raised',
			color: 'primary',
			icon: 'arrow-down-tray',
			iconPosition: 'left',
			click: () => this.loadSampleData()
		}
	});

	// Internal state management
	protected currentState = signal<TableState>('populated');

	// Computed values based on current state
	tableData = computed(() => {
		const state = this.currentState();
		const inputData = this.data();

		switch (state) {
			case 'loading':
				return inputData; // Data doesn't matter when loading
			case 'empty':
				return [];
			case 'populated':
				return inputData;
			default:
				return inputData;
		}
	});

	isLoading = computed(() => {
		const state = this.currentState();
		const inputLoading = this.loading();
		return state === 'loading' || inputLoading;
	});

	// Enhanced no results configuration with dynamic content
	enhancedNoResults = computed<FktNoResults>(() => {
		const baseNoResults = this.noResults();
		const state = this.currentState();

		if (state === 'empty') {
			return {
				...baseNoResults,
				label: 'Table is Empty',
				description: 'This table has been set to empty state for demonstration purposes.',
				icon: { name: 'face-frown', size: '96px' },
				action: {
					identifier: 'populate-table',
					text: 'Load Data',
					theme: 'raised',
					color: 'green',
					icon: 'arrow-down-tray',
					iconPosition: 'left',
					click: () => this.setState('populated')
				}
			};
		}

		return baseNoResults;
	});

	// State change methods
	setState(newState: TableState): void {
		this.currentState.set(newState);
		console.log(`Table state changed to: ${newState}`);
	}

	private handleMainAction(): void {
		console.log('Main action clicked');
		// In a real app, this might open a form or modal to add new data
	}

	private loadSampleData(): void {
		console.log('Loading sample data...');
		this.setState('populated');
	}

	// Public getter for template access
	getCurrentState = computed(() => this.currentState());

	// Expose current state for debugging
	getCurrentStateValue(): TableState {
		return this.currentState();
	}
}
