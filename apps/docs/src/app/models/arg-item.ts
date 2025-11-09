import { FktAutocompleteOption } from 'frakton-ng/autocomplete';
import { WritableSignal } from '@angular/core';
import { ControlType } from './control-type';

export interface ArgItem<T> {
	name: string;
	type: ControlType;
	options:  FktAutocompleteOption[];
	description: string;
	control: WritableSignal<T>;
}
