import { ArgTypeSchema, ArgTypeSchemaParsed } from '@/models/arg-type';
import { ControlType } from '@/models/control-type';

export const parseSchema = (schema: ArgTypeSchema): ArgTypeSchemaParsed | ControlType => {
    const parsed = {} as ArgTypeSchemaParsed;

    if(typeof schema === 'string') return schema;

    for (const schemaKey in schema) {
        const value = schema[schemaKey];

        if(typeof value === 'string') {
            parsed[schemaKey] = {
                type: value,
                options: []
            }
            continue;
        }

        parsed[schemaKey] = {
            ...value,
            schema: parseSchema(value.schema ?? {})
        }
    }

    return parsed;
}
