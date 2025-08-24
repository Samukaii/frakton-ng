import { Directive, effect, ElementRef, inject, input, output, signal } from '@angular/core';
import { MarkUsed } from '../utils/mark-used';

@Directive({
	selector: '[appDragAndDrop]',
	host: {
		'(dragover)': "onDragOver($event)",
		'(dragleave)': "onDragLeave($event)",
		'(drop)': "onDrop($event)",
	}
})
export class DragAndDropDirective {
	dropped = output<File[]>();
	dragOverClass = input('drag-and-drop-over');

	private elementRef = inject(ElementRef);
	private isDraggingOver = signal(false);


	@MarkUsed()
	protected updateClass = effect(() => {
		const active = this.isDraggingOver();
		const element = this.elementRef.nativeElement as HTMLElement;

		if (active) element.classList.add(this.dragOverClass());
		else element.classList.remove(this.dragOverClass());
	});

	onDragOver(event: DragEvent) {
		event.preventDefault();
		this.isDraggingOver.set(true);
	}

	onDragLeave(event: DragEvent) {
		event.preventDefault();
		this.isDraggingOver.set(false);
	}

	onDrop(event: DragEvent) {
		event.preventDefault();
		this.isDraggingOver.set(false);

		const files = Array.from(event.dataTransfer?.files || []);
		this.dropped.emit(files);
	}
}
