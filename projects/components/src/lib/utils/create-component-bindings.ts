import {
	Binding,
	inputBinding,
	isSignal,
	outputBinding,
	reflectComponentType,
	signal,
	twoWayBinding,
	Type,
	WritableSignal,
} from '@angular/core';
import { FktReactiveComponentData } from '../shared/types';

const isWritableSignal = (value: unknown): value is WritableSignal<any> => {
	if (!isSignal(value)) return false;

	const conditions = [
		'update' in value,
		'set' in value,
		'asReadonly' in value,
	];

	return conditions.every(Boolean);
};

export const createComponentBindings = <T>(
	component: Type<T>,
	data: Partial<FktReactiveComponentData<T>>,
) => {
	const bindings: Binding[] = [];

	const mirror = reflectComponentType(component);

	mirror?.inputs.forEach(input => {
		const name = input.templateName;

		const isTwoWayBinding = !!mirror?.outputs.find(
			output => output.templateName === `${name}Change`,
		);

		if (isTwoWayBinding) {
			if (name in data) {
				const value = data[name as keyof typeof data];
				bindings.push(
					twoWayBinding(
						input.templateName,
						isWritableSignal(value) ? value : signal(value),
					),
				);
			}

			return;
		}

		if (name in data) {
			const value = data[name as keyof typeof data];
			bindings.push(
				inputBinding(
					input.templateName,
					isSignal(value) ? value : signal(value),
				),
			);
		}
	});

	mirror?.outputs.forEach(output => {
		const name = output.templateName;

		if (name in data) {
			const value = data[
				name as keyof typeof data
			] as unknown as () => {};
			bindings.push(outputBinding(output.templateName, value));
		}
	});

	return bindings;
};
