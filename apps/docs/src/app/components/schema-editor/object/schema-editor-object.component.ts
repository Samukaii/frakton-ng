import { Component, computed, input, model, output } from '@angular/core';
import { ArgTypeSchema, ArgTypeSchemaParsed } from '@/models/arg-type';
import { parseSchema } from '@/components/schema-editor/utils/parse-schema';
import {
    ControlTypeEditorCellComponent
} from '@/components/control-type-editor-table-cell/control-type-editor-cell.component';
import { FktDividerComponent } from 'frakton-ng/divider';
import { FktIconName } from 'frakton-ng/icon';

@Component({
    selector: 'fkt-schema-editor-object',
    imports: [
        ControlTypeEditorCellComponent,
        FktDividerComponent
    ],
    templateUrl: './schema-editor-object.component.html',
    styleUrl: './schema-editor-object.component.scss',
})
export class SchemaEditorObjectComponent {
    label = input.required<string>();
    value = model.required<Record<string, any>>();
    schema = input<ArgTypeSchema>();

    parsedSchema = computed(() => {
        return parseSchema(this.schema() ?? {});
    })

    schemaList = computed(() => {
        const schema = this.parsedSchema() ?? {};

        return Object.entries(schema).map(([key, value]) => ({name: key, type: value}));
    })

    updateKey(name: any, $event: any) {
        const value = this.value() ?? {};

        value[name] = $event;

        console.log(value);

        this.value.set(value);
    }
}
