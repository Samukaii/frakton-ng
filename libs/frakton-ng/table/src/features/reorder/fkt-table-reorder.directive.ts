import { computed, Directive, inject, model, signal } from '@angular/core';
import { FktTableContextDirective } from '../../core/fkt-table-context.directive';

@Directive({
    selector: 'fkt-table[fktTableReorder]',
})
export class FktTableReorderDirective {
    readonly columnOrder = model<string[]>([]);
    readonly dragSourceKey = signal<string | null>(null);
    readonly dragOverKey = signal<string | null>(null);

    private readonly context = inject(FktTableContextDirective);

    readonly orderedColumns = computed(() => {
        const order = this.columnOrder();
        const columns = this.context.columns();

        if (!order.length) return columns;

        return [...columns].sort((current, next) => {
            const currentIndex = order.indexOf(current.key);
            const nextIndex = order.indexOf(next.key);

            if (currentIndex === -1 && nextIndex === -1) return 0;
            if (currentIndex === -1) return 1;
            if (nextIndex === -1) return -1;

            return currentIndex - nextIndex;
        });
    });

    private readonly afterDragSourceKey = computed(() => {
        const sourceKey = this.dragSourceKey();
        const keys = this.orderedColumns().map((column) => column.key);

        const index = keys.indexOf(sourceKey ?? '');
        if (index === -1) return null;

        return keys[index + 1];
    });

    onDragStart(key: string, event: DragEvent): void {
        this.dragSourceKey.set(key);
        if (event.dataTransfer) event.dataTransfer.effectAllowed = 'move';
    }

    onDragOver(key: string, event: DragEvent): void {
        event.preventDefault();
        if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
        if (key === this.dragSourceKey() || key === this.afterDragSourceKey())
            return;
        this.dragOverKey.set(key);
    }

    onDrop(targetKey: string, event: DragEvent): void {
        event.preventDefault();
        const sourceKey = this.dragSourceKey();
        this.dragSourceKey.set(null);
        this.dragOverKey.set(null);

        if (!sourceKey || sourceKey === targetKey) return;

        const currentKeys = this.context.columns().map((column) => column.key);
        const newOrder = currentKeys.filter((key) => key !== sourceKey);

        newOrder.splice(newOrder.indexOf(targetKey), 0, sourceKey);

        this.columnOrder.set(newOrder);
    }

    onDragEnd(): void {
        this.dragSourceKey.set(null);
        this.dragOverKey.set(null);
    }
}
