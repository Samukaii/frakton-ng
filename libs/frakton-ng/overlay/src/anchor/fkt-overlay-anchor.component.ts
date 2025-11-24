import {
	Component,
	computed,
	effect,
	ElementRef,
	inject,
	input,
	linkedSignal,
	output,
	signal,
	viewChild,
	ViewContainerRef
} from '@angular/core';
import { FktGeometryAlignmentService } from 'frakton-ng/internal/services';
import { elementSizeSignal, isElementInside, MarkUsed, outsideClickEffect } from 'frakton-ng/internal/utils';
import { FktGeometryPoint, FktGeometryPosition, Generic } from 'frakton-ng/internal/types';
import { OVERLAY_INFO } from '../tokens/overlay-info';
import { FktOverlayRef } from '../fkt-overlay.types';
import { FktFocusTrapDirective } from 'frakton-ng/focus-trap';
import { injectWindowScroll } from 'frakton-ng/internal/di';

@Component({
	selector: 'fkt-overlay-anchor',
	template: `
		<div [style]="styles()" (keydown.esc)="$event.stopPropagation(); escapeKeyDown.emit()" fktFocusTrap
			 role="dialog" class="overlay-container">
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
			background-color: var(--background-color, var(--fkt-color-modal-background));
			box-shadow: var(--box-shadow, -4px 7px 20px 0px rgba(0, 0, 0, 0.18));
			padding: var(--padding);
			border-radius: var(--border-radius, 10px);
		}
	`,
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
	imports: [
		FktFocusTrapDirective
	]
})
export class FktOverlayAnchorComponent {
	id = input.required<string>();
	stackIndex = input.required<number>();
	overlayRefs = input.required<Map<string, FktOverlayRef<any>>>();
	anchor = input.required<ElementRef>();
	spacing = input(16);
	preferredPositions = input<FktGeometryPosition | FktGeometryPosition[]>();
	disableAutoReposition = input<boolean>();
	maxHeight = input('300px');
	minWidth = input('200px');
	width = input<string>();
	padding = input<string>();
	borderRadius = input<string>();
	backgroundColor = input<string>();
	overflow = input<'hidden' | 'visible' | 'scroll' | 'auto'>();
	boxShadow = input<string>();
	styles = input<Generic>({});
	escapeKeyDown = output();
	outsideClick = output<HTMLElement>();
	closeClick = output();
	scroll = output();

	public container = viewChild.required('container', {read: ViewContainerRef});
	private focusTrap = viewChild.required(FktFocusTrapDirective);


	private alignmentService = inject(FktGeometryAlignmentService);
	private overlayInfo = inject(OVERLAY_INFO);
	protected windowScroll = injectWindowScroll();

	protected windowScrollChange = linkedSignal<FktGeometryPoint, FktGeometryPoint | null>({
		source: this.windowScroll,
		computation: (source, previous) => {
			if(!previous)
				return null;

			return source;
		}
	})

	private childrenOverlays = computed(() => {
		const overlayRefs = this.overlayRefs();

		return Array.from(overlayRefs.values()).filter(overlayRef => {
			return overlayRef.stackIndex > this.stackIndex()
		})
	});

	@MarkUsed()
	protected autoCloseOnOutsideClick = outsideClickEffect((element) => {
		if (!(element instanceof HTMLElement))
			return;

		const anchorElement = this.anchor().nativeElement as HTMLElement;

		const children = this.childrenOverlays().map(ref =>
			ref.componentRef.location.nativeElement as HTMLElement
		);

		const exceptElements = [
			anchorElement,
			...children
		];

		if (exceptElements.some(exceptElement => isElementInside(element, exceptElement)))
			return;

		this.outsideClick.emit(element);
	});

	@MarkUsed()
	protected autoCloseOnScroll = effect(() => {
		const change = this.windowScrollChange();

		if(change === null)
			return;

		this.scroll.emit();
	});

	private elementRef = inject(ElementRef);

	protected sizeSignal = elementSizeSignal(this.elementRef.nativeElement, {
		startWithNull: true,
	});
	protected canShow = signal(false);
	protected internalWidth = computed(() => {
		const width = this.width();

		if (width) return width;

		return `${this.anchor().nativeElement.getBoundingClientRect().width}px`;
	});

	protected alignedPosition = computed(() => {
		const anchor = this.anchor() as ElementRef<HTMLElement>;
		this.windowScroll();

		const anchorRect = anchor.nativeElement.getBoundingClientRect();
		const size = this.sizeSignal();


		if (!size) return null;

        const preferredPositions = this.preferredPositions();

		return this.alignmentService.smartAlignTargetTo({
			anchor: anchorRect,
			targetSize: size,
			disableAutoReposition: this.disableAutoReposition() ?? false,
			preferredPositions: preferredPositions ? Array.isArray(preferredPositions) ? preferredPositions : [preferredPositions] : ['bottom-center'],
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

	public restoreFocus() {
		this.focusTrap().restoreFocus();
	}
}
