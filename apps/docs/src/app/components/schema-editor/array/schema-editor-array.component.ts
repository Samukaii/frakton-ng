import { Component, computed, input, linkedSignal, model, output } from '@angular/core';
import { FktTableActionFn, FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';
import { FktButtonAction } from 'frakton-ng/button';
import { ArgTypeSchema, ArgTypeSchemaParsed } from '@/models/arg-type';
import { parseSchema } from '@/components/schema-editor/utils/parse-schema';

@Component({
    selector: 'fkt-schema-editor-array',
    imports: [
        FktTableComponent
    ],
    templateUrl: './schema-editor-array.component.html',
    styleUrl: './schema-editor-array.component.scss',
})
export class SchemaEditorArrayComponent {
    value = model.required<any[]>();
    schema = input<ArgTypeSchema>();

    parsedSchema = computed(() => {
        return parseSchema(this.schema() ?? {});
    })

    valueWithIds = linkedSignal(() => {
        return this.value().map((item) => ({
            id: crypto.randomUUID(),
            ...item
        }))
    })

    columnsFn = computed(() => {
        const schema = this.parsedSchema() ?? {};

        const schemaList = Object.entries(schema).map(([key, value]) => ({name: key, type: value}));

        const fn: FktTableColumnFn<any> = (item) => schemaList.filter(schema => schema.type.hidden !== true).map(schema => {
            return {
                name: schema.name,
                position: schema.name,
                cell: {
                    type: 'control-editor',
                    options: {
                        value: item[schema.name] ?? '',
                        type: schema.type.type,
                        schema: schema.type.schema,
                        options: schema.type.options ?? [],
                        name: schema.name,
                        update: (value) => {
                            this.updateValue(item.id, schema.name, value)
                        }
                    }
                }
            }
        })

        return fn;
    })

    private getSchemaDefaultValue = (type: ArgTypeSchemaParsed[string]) => {
        if(type.defaultValue) return type.defaultValue;

        switch (type.type) {
            case "number":
                return 0;
            case "text":
                return ""
            case "boolean":
                return false
            case "color":
                return "#000";
            case "object":
                return {}
            case "array":
                return [];
            case "select":
                return type.options?.[0];
            case "function":
                return () => [];
        }
    }

    private createBlank = () => {
        const object: any = {};

        const schemaList = Object.entries(this.parsedSchema() ?? {}).map(([key, value]) => ({name: key, type: value}));

        schemaList.forEach(schema => {
            object[schema.name] = this.getSchemaDefaultValue(schema.type);
        })

        return object;
    }

    private updateValue = (id: string, property: string, value: any) => {
        const values = [...this.valueWithIds()];

        const item = values.find(item => item.id === id);

        item[property] = value;

        const result = values.map(item => {
            if (item.id !== id) return item;

            return item;
        });

        this.value.set(result);
    }

    private removeValue = (id: string) => {
        const values = [...this.valueWithIds()];

        const result = values.filter(item => item.id !== id);

        this.value.set(result);
    }

    protected actionsFn: FktTableActionFn<any> = (item) => [
        {
            icon: 'trash',
            ariaLabel: "Remover",
            theme: 'basic',
            color: 'danger',
            identifier: 'remove',
            click: () => {
                this.removeValue(item.id)
            }
        }
    ]

    protected addNew: FktButtonAction = {
        icon: "plus",
        identifier: 'add-new',
        color: 'accent',
        ariaLabel: 'Add new item',
        click: () => {
            this.value.update(items => {
                return [
                    this.createBlank(),
                    ...items
                ]
            })
        }
    };

}
