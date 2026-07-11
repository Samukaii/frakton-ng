import { fktColors } from 'frakton-ng/core';
import { fktButtonShapes, fktButtonAppearances } from 'frakton-ng/button';
import { ArgTypeSchema } from '@/models/arg-type';

export const buttonActionSchema: ArgTypeSchema = {
    label: 'text',
    iconOnly: 'boolean',
    color: {
        type: 'select',
        options: [...fktColors],
    },
    appearance: {
        type: 'select',
        options: [...fktButtonAppearances]
    },
    shape: {
        type: 'select',
        options: [...fktButtonShapes]
    },
    icon: 'icon',
}
