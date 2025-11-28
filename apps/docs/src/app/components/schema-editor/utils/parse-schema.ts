import { ArgTypeSchema, ArgTypeSchemaParsed } from '@/models/arg-type';

export const parseSchema = (schema: ArgTypeSchema): ArgTypeSchemaParsed => {
    const parsed = {} as ArgTypeSchemaParsed;

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
