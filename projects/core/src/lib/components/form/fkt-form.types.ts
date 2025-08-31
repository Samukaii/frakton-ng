import { Generic, SignalFormGroupValue } from '../../shared/types';
import { SignalFormGroup } from '../../form';

export type FktFormModifier<
	InputModel extends Generic,
	Form extends SignalFormGroup<any>,
> = {
	[Key in keyof SignalFormGroupValue<Form>]?: (
		value: InputModel,
	) => SignalFormGroupValue<Form>[Key];
};
