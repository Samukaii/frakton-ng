import { SignalFormControlTransformer } from "../../shared/types/form/signal-form-control-transformer";

export const fktInputTypes = ['text', 'password', 'number', 'email'] as const;
export const fktInputTransformers = ['currency', 'percent', 'hour'] as const;

export type FktInputType = typeof fktInputTypes[number];
export type FktInputTransformer = typeof fktInputTransformers[number] | SignalFormControlTransformer;
