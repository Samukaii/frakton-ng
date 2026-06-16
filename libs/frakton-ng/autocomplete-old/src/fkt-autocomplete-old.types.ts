export interface FktAutocompleteOption {
	value: string | number;
	label: string;
}

export interface FktAutoCompleteAddOptionEvent {
	inputValue: string;
	done: (optionValue: string | number) => void
}
