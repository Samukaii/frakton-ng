import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { FktNavigatorComponent } from '@frakton-ng/navigator';

const meta: Meta<FktNavigatorComponent> = {
	title: 'Components/Navigator',
	component: FktNavigatorComponent,
	argTypes: {
		canGoToPrevious: {
			control: 'boolean',
			table: {
				category: 'Attributes'
			}
		},
		canGoToNext: {
			control: 'boolean',
			table: {
				category: 'Attributes'
			}
		},
		next: {
			control: 'object',
			table: {
				category: 'Events'
			}
		},
		previous: {
			control: 'object',
			table: {
				category: 'Events'
			}
		},
	}
};

type Story = StoryObj<FktNavigatorComponent>;

// Basic Navigation
@Component({
	selector: 'basic-story',
	template: `
		<fkt-navigator
			[canGoToPrevious]="canGoToPrevious"
			[canGoToNext]="canGoToNext"
			(previous)="goToPrevious()"
			(next)="goToNext()"
		/>
	`,
	standalone: true,
	imports: [FktNavigatorComponent]
})
class BasicStoryComponent {
	canGoToPrevious = true;
	canGoToNext = true;

	goToPrevious() {
		console.log('Navigate to previous');
	}

	goToNext() {
		console.log('Navigate to next');
	}
}

export const Basic: Story = {
	render: (args) => ({
		component: BasicStoryComponent,
		props: args
	})
};

// Page Navigation
@Component({
	selector: 'page-navigation-story',
	template: `
		<div class="space-y-4">
			<div class="text-center text-gray-600">
				Page {{ currentPage }} of {{ totalPages }}
			</div>
			<fkt-navigator
				[canGoToPrevious]="currentPage > 1"
				[canGoToNext]="currentPage < totalPages"
				(previous)="previousPage()"
				(next)="nextPage()"
			/>
		</div>
	`,
	standalone: true,
	imports: [FktNavigatorComponent]
})
class PageNavigationStoryComponent {
	currentPage = 1;
	totalPages = 10;

	previousPage() {
		if (this.currentPage > 1) {
			this.currentPage--;
		}
	}

	nextPage() {
		if (this.currentPage < this.totalPages) {
			this.currentPage++;
		}
	}
}

export const PageNavigation: Story = {
	render: (args) => ({
		component: PageNavigationStoryComponent,
		props: args
	})
};

// Date Navigation
@Component({
	selector: 'date-navigation-story',
	template: `
		<div class="space-y-4">
			<div class="text-center text-lg font-medium">
				{{ currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) }}
			</div>
			<fkt-navigator
				[canGoToPrevious]="true"
				[canGoToNext]="true"
				(previous)="previousMonth()"
				(next)="nextMonth()"
			/>
		</div>
	`,
	standalone: true,
	imports: [FktNavigatorComponent]
})
class DateNavigationStoryComponent {
	currentDate = new Date();

	previousMonth() {
		this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
	}

	nextMonth() {
		this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
	}
}

export const DateNavigation: Story = {
	render: (args) => ({
		component: DateNavigationStoryComponent,
		props: args
	})
};

// Item Navigation
@Component({
	selector: 'item-navigation-story',
	template: `
		<div class="space-y-4">
			<div class="text-center p-4 bg-gray-100 rounded">
				<h3 class="font-medium">{{ currentItem.title }}</h3>
				<p class="text-gray-600">{{ currentItem.description }}</p>
			</div>
			<fkt-navigator
				[canGoToPrevious]="currentIndex > 0"
				[canGoToNext]="currentIndex < items.length - 1"
				(previous)="previousItem()"
				(next)="nextItem()"
			/>
			<div class="text-center text-sm text-gray-500">
				Item {{ currentIndex + 1 }} of {{ items.length }}
			</div>
		</div>
	`,
	standalone: true,
	imports: [FktNavigatorComponent]
})
class ItemNavigationStoryComponent {
	items = [
		{ title: 'First Item', description: 'This is the first item in the list' },
		{ title: 'Second Item', description: 'This is the second item in the list' },
		{ title: 'Third Item', description: 'This is the third item in the list' }
	];
	currentIndex = 0;

	get currentItem() {
		return this.items[this.currentIndex];
	}

	previousItem() {
		if (this.currentIndex > 0) {
			this.currentIndex--;
		}
	}

	nextItem() {
		if (this.currentIndex < this.items.length - 1) {
			this.currentIndex++;
		}
	}
}

export const ItemNavigation: Story = {
	render: (args) => ({
		component: ItemNavigationStoryComponent,
		props: args
	})
};

// Disabled States
@Component({
	selector: 'disabled-states-story',
	template: `
		<div class="space-y-6">
			<div>
				<h3 class="font-medium mb-2">Previous Disabled</h3>
				<fkt-navigator
					[canGoToPrevious]="false"
					[canGoToNext]="true"
					(previous)="onPrevious()"
					(next)="onNext()"
				/>
			</div>
			<div>
				<h3 class="font-medium mb-2">Next Disabled</h3>
				<fkt-navigator
					[canGoToPrevious]="true"
					[canGoToNext]="false"
					(previous)="onPrevious()"
					(next)="onNext()"
				/>
			</div>
			<div>
				<h3 class="font-medium mb-2">Both Disabled</h3>
				<fkt-navigator
					[canGoToPrevious]="false"
					[canGoToNext]="false"
					(previous)="onPrevious()"
					(next)="onNext()"
				/>
			</div>
		</div>
	`,
	standalone: true,
	imports: [FktNavigatorComponent]
})
class DisabledStatesStoryComponent {
	onPrevious() {
		console.log('Previous clicked');
	}

	onNext() {
		console.log('Next clicked');
	}
}

export const DisabledStates: Story = {
	render: (args) => ({
		component: DisabledStatesStoryComponent,
		props: args
	})
};

// With Loading
@Component({
	selector: 'with-loading-story',
	template: `
		<div class="space-y-4">
			<button
				(click)="toggleLoading()"
				class="px-4 py-2 bg-blue-500 text-white rounded"
			>
				{{ isLoading ? 'Stop Loading' : 'Start Loading' }}
			</button>
			<fkt-navigator
				[canGoToPrevious]="!isLoading"
				[canGoToNext]="!isLoading"
				(previous)="handlePrevious()"
				(next)="handleNext()"
			/>
			<div *ngIf="isLoading" class="text-center text-gray-500">
				Loading...
			</div>
		</div>
	`,
	standalone: true,
	imports: [FktNavigatorComponent]
})
class WithLoadingStoryComponent {
	isLoading = false;

	toggleLoading() {
		this.isLoading = !this.isLoading;
	}

	handlePrevious() {
		if (!this.isLoading) {
			console.log('Previous navigation');
		}
	}

	handleNext() {
		if (!this.isLoading) {
			console.log('Next navigation');
		}
	}
}

export const WithLoading: Story = {
	render: (args) => ({
		component: WithLoadingStoryComponent,
		props: args
	})
};

export default meta;
