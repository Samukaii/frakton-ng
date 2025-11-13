export interface FktControlFormatter<ModelValue, FormattedValue> {
	viewToModelValue: (value: FormattedValue) => ModelValue;
	modelToViewValue?: (value: ModelValue) => FormattedValue;
	sanitizeViewValue?: (params: {
		currentValue: FormattedValue;
		previousValue: FormattedValue | null;
		previousCursorPosition: number
	}) => { sanitizedValue: FormattedValue; cursorOffset?: number };
}
