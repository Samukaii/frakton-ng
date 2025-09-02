import { Generic } from '@frakton-ng/internal/types';
import { SignalFormGroup, SignalFormGroupValue } from '@frakton-ng/forms';

export type FktFormModifier<
	InputModel extends Generic,
	Form extends SignalFormGroup<any>,
> = {
	[Key in keyof SignalFormGroupValue<Form>]?: (
		value: InputModel,
	) => SignalFormGroupValue<Form>[Key];
};
