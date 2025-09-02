import { ControlEvent, FormControl, TouchedChangeEvent, ValidationErrors, ValueChangeEvent } from "@angular/forms";
import { filter, Subscription } from 'rxjs';
import { afterRenderEffect, DestroyRef, inject, isSignal, signal, Signal } from '@angular/core';

interface ControlErrorsSignal {
	(control: FormControl | Signal<FormControl>): Signal<ValidationErrors | null>;
}

export const controlErrorsSignal: ControlErrorsSignal = (control) => {
	const destroyRef = inject(DestroyRef);
  const controlErrors = signal<ValidationErrors | null>(null, {equal: () => false});
  let subscription: Subscription | null = null;

  const watchFormControl = <T>(control: FormControl<T>) => {
    let changes = control.events;

    controlErrors.set(control.errors);

    const matchEvent = (event: ControlEvent) => {
      const events = [
        ValueChangeEvent,
        TouchedChangeEvent
      ];

      return !!events.find(targetEvent => event instanceof targetEvent);
    }

    return changes.pipe(filter(matchEvent)).subscribe(() => {
      controlErrors.set(control.errors);
    });
  }

	if(!isSignal(control)) {
		subscription = watchFormControl(control);
	}
  else {
    afterRenderEffect(() => {
      subscription = watchFormControl(control())
    });
  }

	destroyRef.onDestroy(() => {
		subscription?.unsubscribe();
	});

	return controlErrors;
};
