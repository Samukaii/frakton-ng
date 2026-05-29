import { ControlType } from './control-type';

export type ArgTypeSchemaParsed = Record<string, {
    type: ControlType;
    schema?: ControlType | ArgTypeSchemaParsed;
    defaultValue?: any;
    hidden?: boolean;
    options?: string[];
}>


export type ArgTypeSchema = ControlType | Record<string, ControlType | {
    type: ControlType;
    schema?: ArgTypeSchema;
    defaultValue?: any;
    hidden?: boolean;
    options?: string[];
}>

export interface ArgTypeOwner {
    type: 'component' | 'directive';
    label: string;
    name?: string;
    selector?: string;
}

export type ArgType = {
    type: string;
    required?: boolean;
    options?: readonly string[];
    defaultValue?: string;
    import?: string;
    category: 'Attributes' | 'Methods' | 'Events';
    description?: string;
    owner?: ArgTypeOwner;
    playground?: boolean;
} & (
    | {
          control: 'object' | 'array';
          schema?: ArgTypeSchema;
      }
    | {
          control: Exclude<ControlType, 'object' | 'array'>;
      }
);
