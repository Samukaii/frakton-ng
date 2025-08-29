import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { FktNoResultsComponent } from './fkt-no-results.component';
import { FktNoResults } from './fkt-no-results.types';

type Story = StoryObj<FktNoResultsComponent>;

// Simple No Results
@Component({
	selector: 'simple-story',
	template: `
		<fkt-no-results
			[noResults]="simpleConfig"
		/>
	`,
	standalone: true,
	imports: [FktNoResultsComponent]
})
class SimpleStoryComponent {
	simpleConfig: FktNoResults = {
		label: 'No results found'
	};
}

// With Icon and Description
@Component({
	selector: 'with-icon-and-description-story',
	template: `
		<fkt-no-results
			[noResults]="detailedConfig"
		/>
	`,
	standalone: true,
	imports: [FktNoResultsComponent]
})
class WithIconAndDescriptionStoryComponent {
	detailedConfig: FktNoResults = {
		label: 'No products available',
		description: 'We couldn\'t find any products matching your criteria.',
		icon: {name: 'shopping-bag', size: '96px'}
	};
}

// With Action Button
@Component({
	selector: 'with-action-story',
	template: `
		<fkt-no-results
			[noResults]="actionableConfig"
		/>
	`,
	standalone: true,
	imports: [FktNoResultsComponent]
})
class WithActionStoryComponent {
	actionableConfig: FktNoResults = {
		label: 'No tasks assigned',
		description: 'You don\'t have any tasks assigned yet.',
		icon: {name: 'clipboard-document-list'},
		action: {
			text: 'Create Task',
			theme: 'raised',
			identifier: 'create-task',
			click: () => this.createNewTask()
		}
	};

	createNewTask() {
		console.log('Creating new task...');
	}
}

// Search Results
@Component({
	selector: 'search-results-story',
	template: `
		<fkt-no-results
			[noResults]="searchConfig"
		/>
	`,
	standalone: true,
	imports: [FktNoResultsComponent]
})
class SearchResultsStoryComponent {
	searchQuery = 'angular components';

	searchConfig: FktNoResults = {
		label: 'No search results',
		description: `No results found for "${this.searchQuery}". Try different keywords.`,
		icon: {name: 'magnifying-glass', size: '80px'},
		action: {
			text: 'Clear Search',
			theme: 'stroked',
			identifier: 'clear-search',
			click: () => this.clearSearch()
		}
	};

	clearSearch() {
		this.searchQuery = '';
		console.log('Search cleared');
	}
}

// Data Table
@Component({
	selector: 'data-table-story',
	template: `
		<fkt-no-results
			[noResults]="tableConfig"
		/>
	`,
	standalone: true,
	imports: [FktNoResultsComponent]
})
class DataTableStoryComponent {
	tableConfig: FktNoResults = {
		label: 'No data available',
		description: 'There are no records to display at this time.',
		icon: {name: 'table-cells', size: '100px'},
		action: {
			text: 'Add Record',
			theme: 'raised',
			identifier: 'add-record',
			click: () => this.openAddRecordModal()
		}
	};

	openAddRecordModal() {
		console.log('Opening add record modal...');
	}
}

// File Upload
@Component({
	selector: 'file-upload-story',
	template: `
		<fkt-no-results
			[noResults]="filesConfig"
		/>
	`,
	standalone: true,
	imports: [FktNoResultsComponent]
})
class FileUploadStoryComponent {
	filesConfig: FktNoResults = {
		label: 'No files found',
		description: 'This folder is empty. Upload some files to get started.',
		icon: {name: 'folder-open', size: '120px'},
		action: {
			text: 'Upload Files',
			theme: 'raised',
			icon: 'arrow-up-tray',
			identifier: 'upload-files',
			click: () => this.openFileUpload()
		}
	};

	openFileUpload() {
		console.log('Opening file upload dialog...');
	}
}

// Compact
@Component({
	selector: 'compact-story',
	template: `
		<div class="w-64 h-48 border border-gray-300 p-4">
			<fkt-no-results
				[noResults]="compactConfig"
			/>
		</div>
	`,
	standalone: true,
	imports: [FktNoResultsComponent]
})
class CompactStoryComponent {
	compactConfig: FktNoResults = {
		label: 'No data',
		icon: {name: 'exclamation-circle', size: '60px'},
		description: 'Data will appear here when available.'
	};
}

const meta: Meta<FktNoResultsComponent> = {
	title: 'Components/No results',
	component: FktNoResultsComponent,
	decorators: [
		moduleMetadata({
			imports: [
				SimpleStoryComponent,
				WithIconAndDescriptionStoryComponent,
				WithActionStoryComponent,
				SearchResultsStoryComponent,
				DataTableStoryComponent,
				FileUploadStoryComponent,
				CompactStoryComponent,
			],
		})
	],
	argTypes: {
		noResults: {
			control: 'object',
			table: {
				type: {
					summary: 'FktNoResults',
				}
			}
		}
	}
};


export const Simple: Story = {
	render: (args) => ({
		template: `<simple-story/>`
	})
};


export const WithIconAndDescription: Story = {
	render: (args) => ({
		template: `<with-icon-and-description-story/>`
	})
};


export const WithAction: Story = {
	render: (args) => ({
		template: `<with-action-story/>`
	})
};


export const SearchResults: Story = {
	render: (args) => ({
		template: `<search-results-story/>`
	})
};


export const DataTable: Story = {
	render: (args) => ({
		template: `<data-table-story/>`
	})
};


export const FileUpload: Story = {
	render: (args) => ({
		template: `<file-upload-story/>`
	})
};


export const Compact: Story = {
	render: (args) => ({
		template: `<compact-story/>`
	})
};

export default meta;
