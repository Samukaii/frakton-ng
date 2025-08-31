import { SignalFormControlTransformer } from "../../shared/types/form/signal-form-control-transformer";

export const currencyTransformer: SignalFormControlTransformer = value => {
	const raw =
		typeof value === 'string' || typeof value === 'number'
			? value.toString()
			: '0';

	const clean = raw
		.replace('R$', '')
		.replace(/\./g, '')
		.replace(',', '')
		.trim();

	let bigIntValue: bigint;
	try {
		bigIntValue = BigInt(clean);
	} catch {
		bigIntValue = BigInt(0);
	}

	const asNumber = Number(bigIntValue) / 100;

	const viewValue = asNumber.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	});

	return { modelValue: bigIntValue.toString(), viewValue: viewValue };
};
