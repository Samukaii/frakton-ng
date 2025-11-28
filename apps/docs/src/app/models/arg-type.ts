import { ControlType } from './control-type';

export type ArgTypeSchemaParsed = Record<string, {
    type: ControlType;
    schema?: ArgTypeSchemaParsed;
    defaultValue?: any;
    hidden?: boolean;
    options?: string[];
}>


export type ArgTypeSchema = Record<string, ControlType | {
    type: ControlType;
    schema?: ArgTypeSchema;
    defaultValue?: any;
    hidden?: boolean;
    options?: string[];
}>

export type ArgType = {
    type: string;
    required?: boolean;
    options?: readonly string[];
    defaultValue?: string;
    import?: string;
    category: 'Attributes' | 'Methods' | 'Events';
    description?: string;
} & ({
    control: 'object' | 'array';
    schema?: ArgTypeSchema
} | {
    control: Exclude<ControlType, 'object' | 'array'>
});
