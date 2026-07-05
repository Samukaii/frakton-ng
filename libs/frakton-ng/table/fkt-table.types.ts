import { FktIdentifiable } from 'frakton-ng/core';
import { FktButtonAction } from 'frakton-ng/button-legacy';
import {
    InputSignal,
    OutputEmitterRef,
    TemplateRef,
    Type,
} from '@angular/core';

export type FktTableSize = 'sm' | 'md' | 'lg';

export type FktTableActionFn<T extends FktIdentifiable> = (
    item: T
) => FktButtonAction[];

export type TableItem = Record<string, any>;

export type FktTableCellRenderOptions =
    | {
          type: 'default';
          value: string;
      }
    | {
          type: 'template';
          templateRef: TemplateRef<any>;
          context: Record<string, any>;
      }
    | {
          type: 'custom';
          component: Type<any>;
          data: any;
      };

export type FktTableFilterRenderOptions = {
    type: 'custom';
    key: string;
    component: Type<any>;
    data: any;
};

export interface FktTableColumn<T> {
    allowSorting?: boolean;
    key: string;
    header: string | (() => TemplateRef<any>);
    exportHeader?: string;
    description?: string;
    filter?: FktTableFilterRenderOptions;
    cell: (item: T) => FktTableCellRenderOptions | string;
    classes?: (item: T) => string | string[];
    pinned?: 'left' | 'right';
    width?: string;
    exportable?: boolean;
    exportValue?: (item: T) => string;
}

export type FktTableFilterValue = Record<string, any>;

export interface FktTableCustomFilter<T> {
    value: InputSignal<T>;
    apply: OutputEmitterRef<T>;
    defaultValue?: InputSignal<T | undefined>;
    close?: OutputEmitterRef<void>;
}

export type FktTableClassesFn<T extends TableItem> = (item: T) => string;

export type FktTableSelection<T extends TableItem> =
    | { selectAll: false; items: T[] }
    | { selectAll: true };

export interface FktTableSortEvent {
    property: string;
    direction: 'asc' | 'desc';
}

export {};
