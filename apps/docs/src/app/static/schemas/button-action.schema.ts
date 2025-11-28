import { fktColors } from 'frakton-ng/core';
import { fktButtonShapes, fktButtonThemes } from 'frakton-ng/button';
import { ArgTypeSchema } from '@/models/arg-type';

export const buttonActionSchema: ArgTypeSchema = {
    text: 'text',
    ariaLabel: {
        type: 'text',
        defaultValue: 'aria label',
        hidden: true
    },
    color: {
        type: 'select',
        options: fktColors as any,
    },
    theme: {
        type: 'select',
        options: fktButtonThemes
    },
    shape: {
        type: 'select',
        options: fktButtonShapes
    },
    icon: 'icon',
}
