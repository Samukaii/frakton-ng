import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Directive, inject, input, PLATFORM_ID } from '@angular/core';
import { FktTableContextDirective } from '../../core/fkt-table-context.directive';

@Directive({
    selector: 'fkt-table[fktTableExport]',
    exportAs: 'fktTableExport',
})
export class FktTableExportDirective {
    readonly filename = input('export');

    private readonly context = inject(FktTableContextDirective);
    private readonly document = inject(DOCUMENT);
    private readonly platformId = inject(PLATFORM_ID);

    public exportCsv(filename?: string): void {
        if (!isPlatformBrowser(this.platformId)) return;

        const data = this.context.data();
        const columns = this.context
            .columns()
            .filter((column) => column.exportable !== false);

        const header = columns.map((column) => {
            if (column.exportHeader) return column.exportHeader;

            return typeof column.header === 'string'
                ? column.header
                : column.key;
        });

        const rows = data.map((item) =>
            columns.map((col) => {
                if (col.exportValue) return col.exportValue(item);

                const cell = col.cell(item);
                if (typeof cell === 'string') return cell;

                const raw = (item as Record<string, unknown>)[col.key];
                return raw != null ? String(raw) : '';
            })
        );

        const csv = [header, ...rows]
            .map((row) => row.map((value) => this.escapeCell(value)).join(','))
            .join('\n');

        const name = filename ?? this.filename();
        const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = this.document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${name}.csv`);
        this.document.body.appendChild(link);
        link.click();
        this.document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    private escapeCell(value: string): string {
        if (
            value.includes(',') ||
            value.includes('\n') ||
            value.includes('"')
        ) {
            return `"${value.replace(/"/g, '""')}"`;
        }
        return value;
    }
}
