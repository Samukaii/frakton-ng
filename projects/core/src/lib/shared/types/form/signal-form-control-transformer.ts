export type SignalFormControlTransformer = (value: any) => {
	modelValue: any;
	viewValue: any;
	cursorPosition?: number;
};
