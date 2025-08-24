import type { Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { fktColors } from '../../shared/types';
import { FktSpinnerComponent } from './fkt-spinner.component';

const meta: Meta<FktSpinnerComponent> = {
	title: 'Components/Spinner',
	component: FktSpinnerComponent,
	argTypes: {
		color: {
			control: 'select',
			options: fktColors
		},
		size: {
			control: "number",
		},
		stroke: {
			control: "number",
		},
	}
};

type Story = StoryObj<FktSpinnerComponent>;

// Default Spinner
@Component({
	selector: 'default-story',
	template: `
		<fkt-spinner />
	`,
	standalone: true,
	imports: [FktSpinnerComponent]
})
class DefaultStoryComponent {}

export const Default: Story = {
	render: (args) => ({
		component: DefaultStoryComponent,
		props: args
	})
};

// Size Variations
@Component({
	selector: 'size-variations-story',
	template: `
		<div class="flex items-center gap-6">
			<div class="text-center">
				<fkt-spinner [size]="24" />
				<p class="mt-2 text-sm text-gray-600">Small (24px)</p>
			</div>
			<div class="text-center">
				<fkt-spinner [size]="48" />
				<p class="mt-2 text-sm text-gray-600">Medium (48px)</p>
			</div>
			<div class="text-center">
				<fkt-spinner [size]="72" />
				<p class="mt-2 text-sm text-gray-600">Large (72px)</p>
			</div>
		</div>
	`,
	standalone: true,
	imports: [FktSpinnerComponent]
})
class SizeVariationsStoryComponent {}

export const SizeVariations: Story = {
	render: (args) => ({
		component: SizeVariationsStoryComponent,
		props: args
	})
};

// Color Themes
@Component({
	selector: 'color-themes-story',
	template: `
		<div class="flex items-center gap-6">
			<div class="text-center">
				<fkt-spinner color="primary" />
				<p class="mt-2 text-sm text-gray-600">Primary</p>
			</div>
			<div class="text-center">
				<fkt-spinner color="green" />
				<p class="mt-2 text-sm text-gray-600">Green</p>
			</div>
			<div class="text-center">
				<fkt-spinner color="yellow" />
				<p class="mt-2 text-sm text-gray-600">Yellow</p>
			</div>
			<div class="text-center">
				<fkt-spinner color="red" />
				<p class="mt-2 text-sm text-gray-600">Red</p>
			</div>
		</div>
	`,
	standalone: true,
	imports: [FktSpinnerComponent]
})
class ColorThemesStoryComponent {}

export const ColorThemes: Story = {
	render: (args) => ({
		component: ColorThemesStoryComponent,
		props: args
	})
};

// Loading State
@Component({
	selector: 'loading-state-story',
	template: `
		<div class="space-y-4">
			<button
				(click)="toggleLoading()"
				class="px-4 py-2 bg-blue-500 text-white rounded"
			>
				{{ isLoading ? 'Stop Loading' : 'Start Loading' }}
			</button>
			<div class="flex items-center gap-3" *ngIf="isLoading">
				<fkt-spinner [size]="24" />
				<span>Loading data...</span>
			</div>
			<div *ngIf="!isLoading" class="text-green-600">
				✓ Data loaded successfully!
			</div>
		</div>
	`,
	standalone: true,
	imports: [FktSpinnerComponent]
})
class LoadingStateStoryComponent {
	isLoading = false;

	toggleLoading() {
		this.isLoading = !this.isLoading;
	}
}

export const LoadingState: Story = {
	render: (args) => ({
		component: LoadingStateStoryComponent,
		props: args
	})
};

// Button Integration
@Component({
	selector: 'button-integration-story',
	template: `
		<div class="flex gap-4">
			<button
				(click)="save()"
				[disabled]="isSaving"
				class="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
			>
				<fkt-spinner *ngIf="isSaving" [size]="16" color="primary" />
				{{ isSaving ? 'Saving...' : 'Save' }}
			</button>
			<button
				(click)="delete()"
				[disabled]="isDeleting"
				class="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
			>
				<fkt-spinner *ngIf="isDeleting" [size]="16" color="red" />
				{{ isDeleting ? 'Deleting...' : 'Delete' }}
			</button>
		</div>
	`,
	standalone: true,
	imports: [FktSpinnerComponent]
})
class ButtonIntegrationStoryComponent {
	isSaving = false;
	isDeleting = false;

	save() {
		this.isSaving = true;
		setTimeout(() => {
			this.isSaving = false;
			console.log('Saved!');
		}, 2000);
	}

	delete() {
		this.isDeleting = true;
		setTimeout(() => {
			this.isDeleting = false;
			console.log('Deleted!');
		}, 2000);
	}
}

export const ButtonIntegration: Story = {
	render: (args) => ({
		component: ButtonIntegrationStoryComponent,
		props: args
	})
};

// Large Overlay
@Component({
	selector: 'large-overlay-story',
	template: `
		<div class="space-y-4">
			<button
				(click)="toggleOverlay()"
				class="px-4 py-2 bg-blue-500 text-white rounded"
			>
				{{ showOverlay ? 'Hide Overlay' : 'Show Overlay' }}
			</button>
			<div class="relative w-full h-64 bg-gray-100 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
				<div *ngIf="!showOverlay" class="text-gray-500">Content area</div>
				<div *ngIf="showOverlay" class="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
					<div class="text-center">
						<fkt-spinner [size]="64" />
						<p class="mt-4 text-gray-600">Processing...</p>
					</div>
				</div>
			</div>
		</div>
	`,
	standalone: true,
	imports: [FktSpinnerComponent]
})
class LargeOverlayStoryComponent {
	showOverlay = false;

	toggleOverlay() {
		this.showOverlay = !this.showOverlay;
	}
}

export const LargeOverlay: Story = {
	render: (args) => ({
		component: LargeOverlayStoryComponent,
		props: args
	})
};

// Custom Configuration
@Component({
	selector: 'custom-configuration-story',
	template: `
		<div class="space-y-6">
			<div class="text-center">
				<fkt-spinner
					[size]="96"
					[stroke]="2"
					color="primary"
				/>
				<p class="mt-2 text-sm text-gray-600">Thin stroke (2px)</p>
			</div>
			<div class="text-center">
				<fkt-spinner
					[size]="96"
					[stroke]="8"
					color="green"
				/>
				<p class="mt-2 text-sm text-gray-600">Thick stroke (8px)</p>
			</div>
		</div>
	`,
	standalone: true,
	imports: [FktSpinnerComponent]
})
class CustomConfigurationStoryComponent {}

export const CustomConfiguration: Story = {
	render: (args) => ({
		component: CustomConfigurationStoryComponent,
		props: args
	})
};

export default meta;
