import { Component, computed, input, linkedSignal, model, output } from '@angular/core';
import { FktTableActionFn, FktTableColumnFn, FktTableComponent } from 'frakton-ng/table';
import { ControlType } from '@/models/control-type';
import { FktButtonsListComponent } from 'frakton-ng/buttons-list';
import { FktButtonAction } from 'frakton-ng/button';
import { FktDividerComponent } from 'frakton-ng/divider';
import { ArgTypeSchema } from '@/models/arg-type';

@Component({
    selector: 'fkt-array-editor-overlay',
    imports: [
        FktTableComponent,
        FktButtonsListComponent,
        FktDividerComponent
    ],
    templateUrl: './array-editor-overlay.component.html',
    styleUrl: './array-editor-overlay.component.scss',
})
export class ArrayEditorOverlayComponent {
    value = model.required<any[]>();
    save = output<any[]>();
    close = output();
    schema = input<ArgTypeSchema>();

    valueWithIds = linkedSignal(() => {
        return this.value().map((item, index) => ({
            id: crypto.randomUUID(),
            ...item
        }))
    })

    columnsFn = computed(() => {
        const schema = this.schema() ?? {};

        const schemaList = Object.entries(schema).map(([key, value]) => ({name: key, type: value}));

        const fn: FktTableColumnFn<any> = (item) => schemaList.map(schema => {
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
                        change: (value) => {
                            this.updateValue(item.id, schema.name, value)
                        }
                    }
                }
            }
        })

        return fn;
    })

    private getSchemaDefaultValue = (type: ControlType) => {
        switch (type) {
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
                return "";
            case "function":
                return () => [];
        }
    }

    private createBlank = () => {
        const object: any = {};

        const schemaList = Object.entries(this.schema() ?? {}).map(([key, value]) => ({name: key, type: value}));

        schemaList.forEach(schema => {
            object[schema.name] = this.getSchemaDefaultValue(schema.type.type);
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

    actionsFn: FktTableActionFn<any> = (item) => [
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
    overlayActions: FktButtonAction[] = [
        {
            text: "Cancel",
            color: 'danger',
            theme: 'stroked',
            identifier: 'cancel',
            click: () => {
                this.close.emit();
            }
        },
        {
            text: "Apply",
            color: 'primary',
            identifier: 'apply',
            click: () => {
                this.save.emit(this.valueWithIds());
            }
        },
    ]
    addNew: FktButtonAction = {
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
