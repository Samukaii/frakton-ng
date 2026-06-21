import { WritableSignal } from '@angular/core';

export const getUpdatedNumericTokenValue = (
    event: KeyboardEvent | MouseEvent,
    value: string,
    operation: 'increase' | 'decrease'
) => {
    event.preventDefault();

    const numberPart = value.match(/-?\d*\.?\d+/)?.[0];

    if (!numberPart) return value;

    let factor = value.includes('rem') ? 0.25 : 1;

    if (event instanceof KeyboardEvent && event.shiftKey) factor = 10;
    if (event instanceof KeyboardEvent && event.ctrlKey) factor = 0.1;

    let updatedNumber =
        Number(numberPart) + (operation === 'increase' ? factor : -factor);

    if (updatedNumber.toString().length > updatedNumber.toFixed(2).length) {
        updatedNumber = Number(updatedNumber.toFixed(2));
    }

    return value.replace(numberPart, updatedNumber.toString());
};

export const updateNumericToken = (
    event: KeyboardEvent | MouseEvent,
    control: WritableSignal<string>,
    operation: 'increase' | 'decrease'
) => {
    control.set(getUpdatedNumericTokenValue(event, control(), operation));
};

export const handleNumericTokenKeydown = (
    event: KeyboardEvent,
    control: WritableSignal<string>
) => {
    const operationByKey: Partial<
        Record<string, 'increase' | 'decrease'>
    > = {
        ArrowUp: 'increase',
        ArrowDown: 'decrease',
        '+': 'increase',
        '-': 'decrease',
    };

    const operation = operationByKey[event.key];

    if (operation) updateNumericToken(event, control, operation);
};
