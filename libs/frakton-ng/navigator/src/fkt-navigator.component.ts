import { Component, input, output } from '@angular/core';
import { FktButtonComponent } from 'frakton-ng/button';

/**
 * A component that provides navigation controls with previous and next buttons.
 * Emits events when navigation actions are triggered.
 * 
 * @example
 * ```html
 * <fkt-navigator 
 *   [canGoToPrevious]="hasPreviousPage"
 *   [canGoToNext]="hasNextPage"
 *   (previous)="goToPrevious()"
 *   (next)="goToNext()">
 * </fkt-navigator>
 * ```
 * 
 * @example
 * ```typescript
 * export class MyComponent {
 *   currentPage = 1;
 *   totalPages = 10;
 *   
 *   get hasPreviousPage() { return this.currentPage > 1; }
 *   get hasNextPage() { return this.currentPage < this.totalPages; }
 *   
 *   goToPrevious() { this.currentPage--; }
 *   goToNext() { this.currentPage++; }
 * }
 * ```
 */
@Component({
	selector: 'fkt-navigator',
	imports: [FktButtonComponent],
	templateUrl: './fkt-navigator.component.html',
	styleUrl: './fkt-navigator.component.scss',
})
export class FktNavigatorComponent {
	/**
	 * Emitted when the next button is clicked
	 */
	next = output();
	
	/**
	 * Emitted when the previous button is clicked
	 */
	previous = output();
	
	/**
	 * Whether the previous button should be enabled
	 * @default true
	 */
	canGoToPrevious = input(true);
	
	/**
	 * Whether the next button should be enabled
	 * @default true
	 */
	canGoToNext = input(true);
}
