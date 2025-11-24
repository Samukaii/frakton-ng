import { FktAutocompleteOption } from 'frakton-ng/autocomplete';
import { WritableSignal } from '@angular/core';
import { ControlType } from './control-type';
import { ArgTypeSchema } from '@/models/arg-type';

export interface ArgItem<T> {
	name: string;
	type: ControlType;
    schema?: ArgTypeSchema;
	options:  FktAutocompleteOption[];
	description: string;
	control: WritableSignal<T>;
}
