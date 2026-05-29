import { defineCells } from 'frakton-ng/table';
import { ControlTypeEditorCellComponent } from '@/components/control-type-editor-table-cell/control-type-editor-cell.component';
import { FktTagComponent } from 'frakton-ng/tag';

export const cell = defineCells({
    typeEditor: ControlTypeEditorCellComponent,
    tag: FktTagComponent,
});
