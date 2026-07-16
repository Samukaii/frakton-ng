export type FktPopoverPosition =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'top-start-corner'
  | 'top-end-corner'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end'
  | 'bottom-start-corner'
  | 'bottom-end-corner'
  | 'start-top'
  | 'start-center'
  | 'start-bottom'
  | 'end-top'
  | 'end-center'
  | 'end-bottom';

export type FktPopoverTrigger = 'click' | 'hover' | 'manual';

export type FktPopoverAnimation = 'fade-slide' | 'none' | (string & {});

export type FktPopoverOverflowStrategy = 'fit' | 'keep-position';

export type FktPopoverRepositionTarget = FktPopoverPosition | 'fit';

export type FktPopoverPositionDirection = 'auto' | 'ltr' | 'rtl';

export interface FktPopoverDismissOn {
  outsideClick?: boolean;
  escape?: boolean;
  scroll?: boolean;
}

export type FktPopoverDismissReason =
  | 'outside-click'
  | 'escape'
  | 'scroll'
  | 'mouse-leave'
  | 'focus-out';

export interface FktPopoverDismissEvent {
  reason: FktPopoverDismissReason;
  sourceEvent?: Event;
}
