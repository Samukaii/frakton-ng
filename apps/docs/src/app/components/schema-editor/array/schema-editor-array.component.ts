import {
    Component,
    computed,
    input,
    linkedSignal,
    model,
    TemplateRef,
    viewChild,
} from '@angular/core';
import {
    FktTableActionFn,
    FktTableColumn,
    FktTableComponent,
} from 'frakton-ng/table';
import { FktButtonAction, FktButtonComponent} from 'frakton-ng/button';
import { ArgTypeSchema, ArgTypeSchemaParsed } from '@/models/arg-type';
import { parseSchema } from '@/components/schema-editor/utils/parse-schema';
import { isObjectLiteral } from '@/utils/is-object-literal';
import { cell } from '@/utils/cell-renderer';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';

@Component({
    selector: 'fkt-schema-editor-array',
    imports: [FktTableComponent, FktButtonComponent],
    templateUrl: './schema-editor-array.component.html',
    styleUrl: './schema-editor-array.component.scss',
})
export class SchemaEditorArrayComponent {
    label = input.required<string>();
    value = model.required<any[]>();
    schema = input<ArgTypeSchema>();

    actionsHeader = viewChild.required('actionsHeader', {read: TemplateRef});

    parsedSchema = computed(() => {
        return parseSchema(this.schema() ?? {});
    });

    valueWithIds = linkedSignal(() => {
        const schema = this.schema();

        return this.value().map((item, index) => {
            if (isObjectLiteral(item) && isObjectLiteral(schema))
                return {
                    id: crypto.randomUUID(),
                    ...item,
                };

            return {
                id: index.toString(),
                literalValue: item,
            };
        });
    });

    columns = computed(() => {
        const schema = this.parsedSchema() ?? {};

        const schemaList = Object.entries(schema).map(([key, value]) => ({
            name: key,
            type: value,
        }));

        const actionsColumn: FktTableColumn<any> = {
            header: this.actionsHeader,
            key: 'actions',
            pinned: 'right',
            width: '50px',
            cell: (item) =>
                cell.custom(FktButtonsListComponent, {
                    actions: this.actionsFn(item),
                }),
        };

        if (typeof schema === 'string')
            return [
                {
                    header: this.label(),
                    key: this.label(),
                    cell: (item) =>
                        cell.typeEditor({
                            value: item['literalValue'],
                            type: schema,
                            name: 'asdasd',
                            update: (value) => {
                                this.updateLiteralValue(item.id, value);
                            },
                        }),
                },
                actionsColumn,
            ] as FktTableColumn<any>[];

        const columns: FktTableColumn<any>[] = schemaList
            .filter((schema) => schema.type.hidden !== true)
            .map((schema) => {
                return {
                    header: schema.name,
                    key: schema.name,
                    cell: (item) =>
                        cell.typeEditor({
                            value: item[schema.name] ?? '',
                            type: schema.type.type,
                            schema: schema.type.schema,
                            options: schema.type.options ?? [],
                            name: schema.name,
                            update: (value) => {
                                this.updateValue(item.id, schema.name, value);
                            },
                        }),
                };
            });

        return [...columns, actionsColumn];
    });

    private getSchemaDefaultValue = (type: ArgTypeSchemaParsed[string]) => {
        if (type.defaultValue) return type.defaultValue;

        switch (type.type) {
            case 'number':
                return 0;
            case 'text':
                return '';
            case 'boolean':
                return false;
            case 'color':
                return '#000';
            case 'object':
                return {};
            case 'array':
                return [];
            case 'select':
                return type.options?.[0];
            case 'function':
                return () => [];
        }
    };

    private createBlank = () => {
        const object: any = {};

        const parsedSchema = this.parsedSchema();

        if (typeof parsedSchema === 'string')
            return this.getSchemaDefaultValue({ type: parsedSchema });

        const schemaList = Object.entries(parsedSchema ?? {}).map(
            ([key, value]) => ({ name: key, type: value })
        );

        schemaList.forEach((schema) => {
            object[schema.name] = this.getSchemaDefaultValue(schema.type);
        });

        return object;
    };

    private updateValue = (id: string, property: string, value: any) => {
        const values = [...this.valueWithIds()];

        const item = values.find((item) => item.id === id);

        if (!item || !(property in item)) return;

        item[property as keyof typeof item] = value;

        const result = values.map((item) => {
            if (item.id !== id) return item;

            return item;
        });

        this.value.set(result);
    };

    private updateLiteralValue = (id: string, value: any) => {
        const values = [...this.valueWithIds()];

        const item = values.find((item) => item.id === id);

        if (!item || !('literalValue' in item)) return;

        item['literalValue'] = value;

        this.value.set(values.map((item) => item.literalValue));
    };

    private removeValue = (id: string) => {
        const values = [...this.valueWithIds()];

        const result = values.filter((item) => item.id !== id);

        this.value.set(result);
    };

    protected createNew() {
        this.value.update((items) => {
            return [this.createBlank(), ...items];
        });
    }

    protected actionsFn: FktTableActionFn<any> = (item) => [
        {
            icon: 'trash',
            label: 'Remover',
            iconOnly: true,
            appearance: 'basic',
            color: 'danger',
            identifier: 'remove',
            click: () => {
                this.removeValue(item.id);
            },
        },
    ];
}
