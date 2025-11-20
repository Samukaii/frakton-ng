import"./chunk-A25UGBQK.js";var e=`<div class="example">
	<h3>Basic Pagination</h3>
	<p>Default pagination with all features enabled. Try navigating through pages and changing page size.</p>

	<fkt-paginator
        [page]="page()"
        [pageSize]="pageSize()"
        [total]="total()"
		(pageChange)="onPageChange($event)"
	/>

	@if (lastPageChange()) {
		<div class="event-display">
			<strong>Last Page Change Event:</strong>
			<pre>{{ lastPageChange() | json }}</pre>
		</div>
	}
</div>
`;var a=`.example {
	padding: 1.5rem;
	border: 1px solid var(--fkt-color-neutral-300);
	border-radius: var(--fkt-radius-md);
	background: var(--fkt-color-surface);

	h3 {
		margin: 0 0 0.5rem 0;
		color: var(--fkt-color-text-primary);
	}

	p {
		margin: 0 0 1.5rem 0;
		color: var(--fkt-color-text-secondary);
	}
}

.event-display {
	margin-top: 1.5rem;
	padding: 1rem;
	background: var(--fkt-color-neutral-200);
	border-radius: var(--fkt-radius-sm);
	border-left: 3px solid var(--fkt-color-primary);

	strong {
		color: var(--fkt-color-text-primary);
		display: block;
		margin-bottom: 0.5rem;
	}

	pre {
		margin: 0;
		font-size: var(--fkt-font-size-sm);
		color: var(--fkt-color-text-secondary);
		background: var(--fkt-color-surface);
		padding: 0.75rem;
		border-radius: var(--fkt-radius-sm);
		overflow-x: auto;
	}
}
`;var t=`import { Component, input, signal, computed } from '@angular/core';
import { FktPaginatorComponent, FktPaginatorEvent } from 'frakton-ng/paginator';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'fkt-paginator-examples-basic',
    imports: [FktPaginatorComponent, JsonPipe],
	templateUrl: './fkt-paginator-examples-basic.component.html',
	styleUrl: './fkt-paginator-examples-basic.component.scss'
})
export class BasicExampleComponent {
	page = input<number>(1);
	pageSize = input<number>(20);
	total = input.required<number>();

	lastPageChange = signal<FktPaginatorEvent | null>(null);

	onPageChange(event: number): void {
		this.lastPageChange.set({
            page: event,
            pageSize: this.pageSize()
        });
		console.log('Basic example - Page change:', event);
	}
}
`;var o=`<div class="example">
	<h3>Configuration Options</h3>
	<p>Examples of different pagination configurations for various use cases.</p>

	<div class="config-example">
		<h4>Minimal (Navigation Only)</h4>
		<p>Perfect for mobile or compact layouts</p>
		<fkt-paginator
			[page]="page()"
			[pageSize]="pageSize()"
			[total]="total()"
			[config]="minimalConfig"
			(pageChange)="onPageChange($event)"
		/>
	</div>

	<div class="config-example">
		<h4>Info Only</h4>
		<p>Just display current state without navigation</p>
		<fkt-paginator
            [page]="page()"
            [pageSize]="pageSize()"
            [total]="total()"
			[config]="infoOnlyConfig"
		/>
	</div>

	<div class="config-example">
		<h4>Custom Page Sizes</h4>
		<p>Different page size options and more visible pages</p>
		<fkt-paginator
            [page]="page()"
            [pageSize]="pageSize()"
            [total]="total()"
			[config]="customConfig"
			(pageChange)="onPageChange($event)"
		/>
	</div>
</div>
`;var n=`.example {
	padding: 1.5rem;
	border: 1px solid var(--fkt-color-neutral-300);
	border-radius: var(--fkt-radius-md);
	background: var(--fkt-color-card-background);

	h3 {
		margin: 0 0 0.5rem 0;
		color: var(--fkt-color-neutral-900);
	}

	> p {
		margin: 0 0 2rem 0;
		color: var(--fkt-color-neutral-900);
	}
}

.config-example {
	margin-bottom: 2rem;
	padding: 1.5rem;
	border: 1px solid var(--fkt-color-neutral-300);
	border-radius: var(--fkt-radius-sm);

	&:last-child {
		margin-bottom: 0;
	}

	h4 {
		margin: 0 0 0.25rem 0;
		color: var(--fkt-color-neutral-900);
		font-size: var(--fkt-font-size-md);
	}

	p {
		margin: 0 0 1rem 0;
		color: var(--fkt-color-neutral-900);
		font-size: var(--fkt-font-size-sm);
	}
}
`;var r=`import { Component, input, computed } from '@angular/core';
import { FktPaginatorComponent, FktPaginatorConfig, FktPaginatorEvent } from 'frakton-ng/paginator';

@Component({
	selector: 'fkt-paginator-examples-configurable',
	imports: [FktPaginatorComponent],
	templateUrl: './fkt-paginator-examples-configurable.component.html',
	styleUrl: './fkt-paginator-examples-configurable.component.scss'
})
export class ConfigurableExampleComponent {
    page = input<number>(1);
	pageSize = input<number>(10);
	total = input<number>(100);

	// Minimal config - only essentials
	minimalConfig: FktPaginatorConfig = {
		showFirstLast: false,
		showPageSize: false,
		showInfo: false,
		maxVisiblePages: 3
	};

	// Info only config - just display info
	infoOnlyConfig: FktPaginatorConfig = {
		showFirstLast: false,
		showPrevNext: false,
		showPageNumbers: false,
		showPageSize: false,
		showInfo: true
	};

	// Custom page sizes
	customConfig: FktPaginatorConfig = {
		pageSizeOptions: [5, 15, 25, 50],
		maxVisiblePages: 7
	};

	onPageChange(event: number): void {
		console.log('Configurable example - Page change:', event);
	}
}
`;var i=`<div class="example">
	<h3>Responsive Design</h3>
	<p>Resize your browser to see how the pagination adapts to different screen sizes. On mobile, elements reorder for better usability.</p>

	<div class="responsive-container">
		<fkt-paginator
            [page]="page()"
            [pageSize]="pageSize()"
            [total]="total()"
			(pageChange)="onPageChange($event)"
		/>
	</div>

	<div class="layout-info">
		<h4>Responsive Behavior:</h4>
		<ul>
			<li><strong>Desktop:</strong> All elements in a horizontal line</li>
			<li><strong>Mobile (&lt; 640px):</strong> Stacked layout with reordering:
				<ol>
					<li>Navigation controls</li>
					<li>Page size selector</li>
					<li>Info text</li>
				</ol>
			</li>
		</ul>
	</div>
</div>
`;var s=`.example {
	padding: 1.5rem;
	border: 1px solid var(--fkt-color-neutral-300);
	border-radius: var(--fkt-radius-md);
	background: var(--fkt-color-card-background);

	h3 {
		margin: 0 0 0.5rem 0;
		color: var(--fkt-color-text-primary);
	}

	> p {
		margin: 0 0 2rem 0;
		color: var(--fkt-color-text-secondary);
	}
}

.responsive-container {
	padding: 1.5rem;
	border: 2px dashed var(--fkt-color-neutral-300);
	border-radius: var(--fkt-radius-sm);
	margin-bottom: 2rem;
	background: var(--fkt-color-modal-background);
}

.layout-info {
	background: var(--fkt-color-surface-tertiary);
	padding: 1.5rem;
	border-radius: var(--fkt-radius-sm);

	h4 {
		margin: 0 0 1rem 0;
		color: var(--fkt-color-text-primary);
		font-size: var(--fkt-font-size-md);
	}

	ul, ol {
		margin: 0;
		padding-left: 1.5rem;
		color: var(--fkt-color-text-secondary);
		font-size: var(--fkt-font-size-sm);
	}

	li {
		margin-bottom: 0.5rem;

		&:last-child {
			margin-bottom: 0;
		}
	}

	ol {
		margin-top: 0.5rem;
		padding-left: 2rem;
	}
}
`;var l=`import { Component, input, computed } from '@angular/core';
import { FktPaginatorComponent, FktPaginatorEvent } from 'frakton-ng/paginator';

@Component({
	selector: 'fkt-paginator-examples-responsive',
	imports: [FktPaginatorComponent],
	templateUrl: './fkt-paginator-examples-responsive.component.html',
	styleUrl: './fkt-paginator-examples-responsive.component.scss'
})
export class ResponsiveExampleComponent {
	page = input<number>(1);
	pageSize = input<number>(25);
    total = input.required<number>();

	onPageChange(event: number): void {
		console.log('Responsive example - Page change:', event);
	}
}
`;var N={FktPaginatorExamplesBasicComponent:{name:"FktPaginatorExamplesBasic",files:[{name:"fkt-paginator-examples-basic.component.html",content:e,language:"html"},{name:"fkt-paginator-examples-basic.component.ts",content:t,language:"typescript"},{name:"fkt-paginator-examples-basic.component.scss",content:a,language:"css"}]},FktPaginatorExamplesConfigurableComponent:{name:"FktPaginatorExamplesConfigurable",files:[{name:"fkt-paginator-examples-configurable.component.html",content:o,language:"html"},{name:"fkt-paginator-examples-configurable.component.ts",content:r,language:"typescript"},{name:"fkt-paginator-examples-configurable.component.scss",content:n,language:"css"}]},FktPaginatorExamplesResponsiveComponent:{name:"FktPaginatorExamplesResponsive",files:[{name:"fkt-paginator-examples-responsive.component.html",content:i,language:"html"},{name:"fkt-paginator-examples-responsive.component.ts",content:l,language:"typescript"},{name:"fkt-paginator-examples-responsive.component.scss",content:s,language:"css"}]}};export{N as default};
