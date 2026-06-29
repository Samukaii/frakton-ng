import {
    FktColorPickerHEX,
    FktColorPickerHSV,
} from 'frakton-ng/internal/types';
import { rgbFormatter } from './rgb-formatter';

const toHexBase = (value: number) => {
    return Math.round(value).toString(16).padStart(2, '0').toUpperCase();
};

const fromHexBase = (value: string) => parseInt(value, 16);

const toAlphaHex = (alpha: number) => toHexBase((alpha / 100) * 255);
const fromAlphaHex = (alpha: string) => (parseInt(alpha, 16) / 255) * 100;

const fromHsv = (hsv: FktColorPickerHSV): FktColorPickerHEX => {
    const { red, green, blue, alpha } = rgbFormatter.fromHsv(hsv);

    return {
        red: toHexBase(red),
        green: toHexBase(green),
        blue: toHexBase(blue),
        alpha: toAlphaHex(alpha),
    };
};

const toHsv = (
    hex: FktColorPickerHEX,
    customDecimalAlpha?: number
): FktColorPickerHSV => {
    const red = fromHexBase(hex.red);
    const green = fromHexBase(hex.green);
    const blue = fromHexBase(hex.blue);
    const alpha =
        customDecimalAlpha ?? (hex.alpha ? fromAlphaHex(hex.alpha) : 100);

    const maxChannel = Math.max(red, green, blue);
    const minChannel = Math.min(red, green, blue);
    const delta = maxChannel - minChannel;

    let hue = 0;
    if (delta !== 0) {
        if (maxChannel === red) {
            hue = 60 * (((green - blue) / delta) % 6);
        } else if (maxChannel === green) {
            hue = 60 * ((blue - red) / delta + 2);
        } else {
            hue = 60 * ((red - green) / delta + 4);
        }
    }
    if (hue < 0) hue += 360;

    const value = (maxChannel / 255) * 100;
    const saturation = maxChannel === 0 ? 0 : (delta / maxChannel) * 100;

    return {
        hue,
        saturation,
        value,
        alpha,
    };
};

const parse = (input: string): FktColorPickerHEX | null => {
    let hex = input.trim().replace(/^#/, '');
    const VALID_HEX_LENGTHS = [3, 4, 6, 8];

    if (!VALID_HEX_LENGTHS.includes(hex.length)) return null;

    if (hex.length === 3 || hex.length === 4)
        hex = hex
            .split('')
            .map((c) => c + c)
            .join('');
    if (hex.length === 6) hex += 'ff';
    if (hex.length === 8) {
        const red = hex.slice(0, 2).toUpperCase();
        const green = hex.slice(2, 4).toUpperCase();
        const blue = hex.slice(4, 6).toUpperCase();
        const alpha = hex.slice(6, 8).toUpperCase();
        const isValid = /^[0-9A-F]{8}$/i.test(hex);
        return isValid ? { red, green, blue, alpha } : null;
    }
    return null;
};

const format = (hsv: FktColorPickerHSV, disableAlphaChannel = false) => {
    const { red, green, blue, alpha } = fromHsv(hsv);

    let value = `#${red}${green}${blue}${alpha}`;

    if (disableAlphaChannel) value = value.slice(0, 7);

    return { value, ariaValue: value };
};

const expand = (hex: string) => {
    hex = hex.replace(/^#/, '').toLowerCase();

    if (hex.length === 3)
        hex =
            hex
                .split('')
                .map((c) => c + c)
                .join('') + 'FF';
    if (hex.length === 4)
        hex = hex
            .split('')
            .map((c) => c + c)
            .join('');

    if (hex.length === 6) hex += 'FF';

    if (hex.length !== 8) return null;

    return '#' + hex;
};

const hasAlpha = (hex: string) => {
    const withoutHexCode = hex.replace('#', '');

    return withoutHexCode.length === 4 || withoutHexCode.length === 8;
};

const isValidHex = (hex: string) => {
    const value = extract(hex);

    return value !== null;
};

const extract = (hex: string): FktColorPickerHEX | null => {
    const expanded = expand(hex);

    if (!expanded) return null;

    const withoutHexCode = expanded.replace('#', '');

    const red = withoutHexCode.slice(0, 2).toUpperCase();
    const green = withoutHexCode.slice(2, 4).toUpperCase();
    const blue = withoutHexCode.slice(4, 6).toUpperCase();
    const alpha = withoutHexCode.slice(6, 8).toUpperCase();

    return { red, green, blue, alpha };
};

export const hexFormatter = {
    fromHsv,
    toAlphaHex,
    isValidHex,
    hasAlpha,
    fromAlphaHex,
    toHsv,
    parse,
    format,
    expand,
    extract,
};
