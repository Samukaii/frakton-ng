export type FktPopoverPosition =
  | 'top-start'
  | 'top-center'
  | 'top-end'
  | 'top-left'
  | 'top-right'
  | 'bottom-start'
  | 'bottom-center'
  | 'bottom-end'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-start'
  | 'left-center'
  | 'left-end'
  | 'right-start'
  | 'right-center'
  | 'right-end';

export type FktPopoverTrigger = 'click' | 'hover' | 'manual';

export type FktPopoverAnimation = 'fade-slide' | 'none' | (string & {});

export type FktPopoverOverflowStrategy = 'fit' | 'keep-position';

export type FktPopoverRepositionTarget = FktPopoverPosition | 'fit';

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
