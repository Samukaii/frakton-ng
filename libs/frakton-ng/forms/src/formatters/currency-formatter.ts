import { FktControlFormatter } from '../types';

export const currencyFormatter: FktControlFormatter<string, string> = {
	viewToModelValue: (value) => {
		const clean = value
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

		return bigIntValue.toString();
	},
	sanitizeViewValue: ({currentValue}) => {
		const clean = currentValue
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

		const sanitizedValue = asNumber.toLocaleString('pt-BR', {
			style: 'currency',
			currency: 'BRL',
		});

		return { sanitizedValue };
	}
}
