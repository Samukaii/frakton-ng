import { ComponentRef } from "@angular/core";

export interface AttachedOverlayRef<T> {
	componentRef: ComponentRef<T>;
	close: () => void;
}
