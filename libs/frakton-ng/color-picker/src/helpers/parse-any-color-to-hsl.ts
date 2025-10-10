import { fktColorFormatters } from '../../../internal/utils/fkt-color-formatters';
import { FktColorPickerHSV } from '../models/fkt-color-picker-hsv';

export const parseAnyColorToHSV = (value: string): FktColorPickerHSV | null  => {
	if(!value) return null;

	const hex = fktColorFormatters.hex.parse(value);

	if(hex)
		return fktColorFormatters.hex.toHsv(hex);

	const hsl = fktColorFormatters.hsl.parse(value);

	if(hsl)
		return fktColorFormatters.hsl.toHsv(hsl);

	const rgb = fktColorFormatters.rgb.parse(value);

	if(rgb)
		return fktColorFormatters.rgb.toHsv(rgb);

	return null;
}
