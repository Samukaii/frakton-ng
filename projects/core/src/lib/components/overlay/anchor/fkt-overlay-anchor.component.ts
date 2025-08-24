import {
	Component,
	computed,
	effect,
	ElementRef,
	inject,
	input,
	output,
	signal,
	viewChild,
	ViewContainerRef
} from '@angular/core';
import { FktGeometryAlignmentService } from '../../../services/geometry-alignment/fkt-geometry-alignment.service';
import { MarkUsed } from '../../../utils/mark-used';
import { elementSizeSignal } from '../../../utils/element-size-signal';
import { FktGeometryPosition } from '../../../shared/types';
import { OVERLAY_INFO } from '../fkt-overlay.service';
import { outsideClickEffect } from '../../../utils/outside-click-effect';
import { isElementInside } from '../../../utils/is-element-inside';

@Component({
	selector: 'fkt-overlay-anchor',
	template: ` <div class="overlay-container">
		<ng-template #container></ng-template>
	</div>`,
	styles: `
		:host {
			position: absolute;
			height: fit-content;
			opacity: 0;
		}

		.overlay-container {
			min-width: var(--min-width, 200px);
			max-height: var(--max-height, 300px);
			overflow: var(--overflow, auto);
			background-color: var(--background-color, white);
			box-shadow: var(--box-shadow, -4px 7px 20px 0px rgba(0, 0, 0, 0.18));
			padding: var(--padding);
			border-radius: var(--border-radius, 10px);
		}
	`,
	standalone: true,
	host: {
		'[style.opacity]': 'canShow() ? 1 : 0',
		'[style.left.px]': 'alignedPosition()?.result?.x ?? 0',
		'[style.top.px]': 'alignedPosition()?.result?.y ?? 0',
		'[style.width]': 'internalWidth()',
		'[style.--max-height]': 'maxHeight()',
		'[style.--padding]': 'padding()',
		'[style.--min-width]': 'minWidth()',
		'[style.--border-radius]': 'borderRadius()',
		'[style.--background-color]': 'backgroundColor()',
		'[style.--overflow]': 'overflow()',
		'[style.--box-shadow]': 'boxShadow()',
		'[id]': 'id()',
	},
})
export class FktOverlayAnchorComponent {
	container = viewChild.required('container', { read: ViewContainerRef });

	id = input.required<string>();
	anchor = input.required<ElementRef>();
	spacing = input(16);
	position = input<FktGeometryPosition>();
	disableAutoReposition = input<boolean>();
	maxHeight = input('300px');
	minWidth = input('200px');
	width = input<string>();
	padding = input<string>();
	borderRadius = input<string>();
	backgroundColor = input<string>();
	overflow = input<'hidden' | 'visible' | 'scroll' | 'auto'>();
	boxShadow = input<string>();
	outsideClick = output<HTMLElement>();

	closeClick = output();
	private alignmentService = inject(FktGeometryAlignmentService);
	private overlayInfo = inject(OVERLAY_INFO);

	@MarkUsed()
	protected autoClose = outsideClickEffect((element) => {
		if(!(element instanceof HTMLElement))
			return;

		if(isElementInside(element, this.anchor().nativeElement))
			return;

		this.outsideClick.emit(element);
	});


	private elementRef = inject(ElementRef);

	protected sizeSignal = elementSizeSignal(this.elementRef.nativeElement, {
		startWithNull: true,
	});
	protected canShow = signal(false);
	protected internalWidth = computed(() => {
		const width = this.width();

		if(width) return width;

		return `${this.anchor().nativeElement.getBoundingClientRect().width}px`;
	});

	protected alignedPosition = computed(() => {
		const anchor = this.anchor() as ElementRef<HTMLElement>;

		const anchorRect = anchor.nativeElement.getBoundingClientRect();
		const size = this.sizeSignal();


		if (!size) return null;

		return this.alignmentService.smartAlignTargetTo({
			anchor: anchorRect,
			targetSize: size,
			disableAutoReposition: this.disableAutoReposition() ?? false,
			preferredPositions: [this.position() ?? 'bottom-center'],
		});
	});

	@MarkUsed()
	protected updateOverlayInfoPosition = effect(() => {
		const alignedPosition = this.alignedPosition();

		this.overlayInfo.currentPosition.set(alignedPosition?.position ?? null);
	});

	@MarkUsed()
	protected updateVisibility = effect(() => {
		if (this.sizeSignal()) {
			setTimeout(() => {
				this.canShow.set(true);
			}, 100);
		}
	});
}
