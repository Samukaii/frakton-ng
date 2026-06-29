import { signal } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {
    FieldTree,
    ValidationError,
    WithOptionalFieldTree,
} from '@angular/forms/signals';
import { FktNormalizedValidationError } from 'frakton-ng/internal/types';

const isRecord = (value: unknown): value is Record<string, unknown> => {
    return !!value && typeof value === 'object';
};

const normalizeReactiveKind = (kind: string) => {
    if (kind === 'minlength') return 'minLength';
    if (kind === 'maxlength') return 'maxLength';

    return kind;
};

const normalizeReactiveParams = (
    kind: string,
    raw: unknown
): Record<string, unknown> => {
    if (!isRecord(raw)) return {};

    if (kind === 'minlength') {
        return {
            minLength: raw['requiredLength'],
            actualLength: raw['actualLength'],
        };
    }

    if (kind === 'maxlength') {
        return {
            maxLength: raw['requiredLength'],
            actualLength: raw['actualLength'],
        };
    }

    return { ...raw };
};

const normalizeSignalParams = (
    error: WithOptionalFieldTree<ValidationError>
): Record<string, unknown> => {
    const entries = Object.entries(error).filter(([key]) => {
        return key !== 'kind' && key !== 'message' && key !== 'field';
    });

    return Object.fromEntries(entries);
};

export const normalizeReactiveValidationError = (
    kind: string,
    raw: unknown,
    options: {
        name?: string;
        control: AbstractControl;
    }
): FktNormalizedValidationError<ReturnType<typeof signal<AbstractControl>>> => {
    return {
        kind: normalizeReactiveKind(kind),
        message: isRecord(raw) ? (raw['message'] as string | undefined) : undefined,
        name: options.name,
        params: normalizeReactiveParams(kind, raw),
        raw,
        field: signal(options.control),
    };
};

const keyInParent = (fieldTree?: FieldTree<unknown>) => {
    try {
        return fieldTree?.().keyInParent()
    }
    catch {
        return undefined;
    }
}

export const normalizeSignalValidationError = (
    error: WithOptionalFieldTree<ValidationError>
): FktNormalizedValidationError<FieldTree<unknown>> => {

    return {
        kind: error.kind,
        message: error.message,
        name: keyInParent(error.fieldTree)?.toString(),
        params: normalizeSignalParams(error),
        raw: error,
        field: error.fieldTree,
    };
};
