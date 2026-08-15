import { DOCUMENT } from '@angular/common';
import { afterRenderEffect, Directive, inject, linkedSignal, OnDestroy, signal, untracked } from '@angular/core';
import { FktGeometryAlignmentService } from 'frakton-ng/internal/services';
import type { FktGeometryDirection, FktGeometryPoint } from 'frakton-ng/internal/types';
import { deepEqual, documentEventListenerEffect, MarkUsed, windowEventListenerEffect } from 'frakton-ng/internal/utils';
import { FktPopoverPosition } from '../../fkt-popover.types';
import { FktPopoverContextDirective } from './fkt-popover-context.directive';

/**
 * @internal
 */
@Directive()
export class FktPopoverPositioningDirective implements OnDestroy {
  private readonly context = inject(FktPopoverContextDirective);
  private readonly alignmentService = inject(FktGeometryAlignmentService);
  private readonly document = inject(DOCUMENT);

  @MarkUsed()
  protected readonly scrollPosition = documentEventListenerEffect({
    key: 'scroll',
    enabled: this.context.open,
    options: { capture: true },
    listener: () => {
      this.schedulePositionUpdate();
    },
  });

  @MarkUsed()
  protected readonly windowResizePosition = windowEventListenerEffect({
    key: 'resize',
    enabled: this.context.open,
    listener: () => {
      this.schedulePositionUpdate();
    },
  });

  private readonly reschedulePositionUpdate = afterRenderEffect(() => {
    this.context.preferredPosition();
    this.context.preferredFallbackPositions();
    this.context.overflowStrategy();
    this.context.offset();
    this.context.anchorSize();
    this.context.positionDirection();

    untracked(() => {
      this.schedulePositionUpdate();
    });
  });

  private scheduledPositionUpdate: number | null = null;

  private readonly _appliedPosition = signal<{
    name: FktPopoverPosition;
    direction: FktGeometryDirection;
    coordinates: FktGeometryPoint;
  } | null>(null, { equal: deepEqual });

  private readonly activePreferredPosition = linkedSignal(
    this.context.preferredPosition
  );

  readonly appliedPosition = this._appliedPosition.asReadonly();

  private get window() {
    return this.document.defaultView;
  }

  private get panelElement() {
    const panel = this.context.panelElement();

    if (!panel)
      throw new Error(
        'FktPopoverPositioningDirective expected a panel element to be registered before positioning.'
      );

    return panel;
  }

  private get anchorRect() {
    return this.context.trigger().getAnchorRect();
  }

  private get direction(): FktGeometryDirection {
    const direction = this.context.positionDirection();

    if (direction !== 'auto') return direction;

    return this.context.trigger().getAnchorDirection();
  }

  updatePosition() {
    if (this.context.overflowStrategy() === 'keep-position') {
      this.updatePositionTo(this.activePreferredPosition());
      return;
    }

    this.updatePositionAvoidingCollisions();
  }

  applyPositioningOverride(
    options:
      | { strategy: 'fit' }
      | { strategy: 'exact'; position: FktPopoverPosition }
  ) {
    const position =
      options.strategy === 'fit'
        ? this.updatePositionAvoidingCollisions()
        : this.updatePositionTo(options.position);

    this.activePreferredPosition.set(position);
  }

  ngOnDestroy() {
    this.cancelScheduledPositionUpdate();
  }

  private getPositionOptions() {
    const panel = this.panelElement;
    const panelRect = panel.getBoundingClientRect();
    const offset = this.context.offset();

    return { anchorRect: this.anchorRect, panelRect, offset };
  }

  private updatePositionTo(position: FktPopoverPosition) {
    const { anchorRect, panelRect, offset } = this.getPositionOptions();

    const result = this.alignmentService.alignTargetTo({
      anchor: anchorRect,
      direction: this.direction,
      targetSize: panelRect,
      padding: offset,
      position,
    });

    this.applyPosition(position, result);

    return position;
  }

  private updatePositionAvoidingCollisions() {
    const { anchorRect, panelRect, offset } = this.getPositionOptions();

    const { position, result } = this.alignmentService.smartAlignTargetTo({
      anchor: anchorRect,
      direction: this.direction,
      targetSize: panelRect,
      padding: offset,
      preferredPositions: this.getPreferredPositions(),
    });

    this.applyPosition(position, result);

    return position;
  }

  private applyPosition(
    position: FktPopoverPosition,
    coordinates: FktGeometryPoint
  ) {
    const direction = this.direction;
    const previousPosition = this._appliedPosition();

    this._appliedPosition.set({
      name: position,
      direction,
      coordinates,
    });

    if (
      previousPosition?.name === position &&
      previousPosition.direction === direction
    )
      return;

    this.context.resolvedPosition.emit({
      direction,
      position,
    });
  }

  private getPreferredPositions() {
    return [
      this.activePreferredPosition(),
      ...this.context.preferredFallbackPositions(),
    ];
  }

  private schedulePositionUpdate() {
    if (!this.context.open()) return;
    if (this.scheduledPositionUpdate !== null) return;

    const window = this.window;

    if (!window) {
      this.updatePosition();
      return;
    }

    this.scheduledPositionUpdate = window.requestAnimationFrame(() => {
      this.scheduledPositionUpdate = null;

      if (!this.context.open()) return;

      this.updatePosition();
    });
  }

  private cancelScheduledPositionUpdate() {
    const scheduledPositionUpdate = this.scheduledPositionUpdate;

    if (scheduledPositionUpdate === null) return;

    this.window?.cancelAnimationFrame(scheduledPositionUpdate);
    this.scheduledPositionUpdate = null;
  }
}
