import { FktControlFormatter } from 'frakton-ng/forms';

export const fktInputTypes = ['text', 'password', 'number', 'email', 'tel', 'url', "date", 'color'] as const;
export const fktInputTransformers = ['currency', 'percent', 'hour'] as const;

export type FktInputType = typeof fktInputTypes[number];
export type FktInputTransformer<T> = typeof fktInputTransformers[number] | FktControlFormatter<T, string>;
