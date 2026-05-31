import { TemplateRef, Type } from '@angular/core';
import { FktComponentData, Generic } from 'frakton-ng/internal/types';
import {
    FktTableCellRenderOptions,
    FktTableFilterRenderOptions,
} from '../../fkt-table.types';

export type FktTableAliases = Record<string, Type<any>>;
type ReservedTableCellAlias = 'template' | 'custom';
type SafeTableCellAliases<T extends FktTableAliases> = Extract<
    keyof T,
    ReservedTableCellAlias
> extends never
    ? T
    : never;

export type TableCellOptions<Aliases extends FktTableAliases> = {
    template: (
        templateRef: TemplateRef<any>,
        context: Generic
    ) => FktTableCellRenderOptions;
    custom: <Component extends Type<unknown>>(
        component: Component,
        options: FktComponentData<InstanceType<Component>>
    ) => FktTableCellRenderOptions;
} & {
    [Key in keyof Aliases]: (
        options: FktComponentData<InstanceType<Aliases[Key]>>
    ) => FktTableCellRenderOptions;
};

export type TableFilterOptions<Aliases extends FktTableAliases> = {
    custom: <Component extends Type<unknown>>(
        filterKey: string,
        component: Component,
        options: FilterComponentData<Component>
    ) => FktTableFilterRenderOptions;
} & {
    [Key in keyof Aliases]: (
        filterKey: string,
        options: FilterComponentData<Aliases[Key]>
    ) => FktTableFilterRenderOptions;
};

export const defineCells = <const Aliases extends FktTableAliases>(
    aliases: SafeTableCellAliases<Aliases>
): TableCellOptions<Aliases> => {
    const renderer: Generic = {};

    for (const key of Object.keys(aliases)) {
        renderer[key] = (options: Generic) => ({
            type: 'custom',
            component: aliases[key],
            data: options,
        });
    }

    renderer['template'] = (
        templateRef: TemplateRef<unknown>,
        context: Generic
    ) => ({
        type: 'template',
        templateRef,
        context,
    });

    renderer['custom'] = (component: Type<unknown>, options: Generic) => ({
        type: 'custom',
        component,
        data: options,
    });

    return renderer as TableCellOptions<Aliases>;
};

type FilterComponentData<T extends Type<any>> = Omit<
    FktComponentData<InstanceType<T>>,
    'value' | 'defaultValue' | 'apply' | 'cancel'
>;

export const defineFilters = <
    const Aliases extends FktTableAliases
>(
    aliases: SafeTableCellAliases<Aliases>
) => {
    const renderer: Generic = {};

    for (const key of Object.keys(aliases)) {
        renderer[key] = (
            filterKey: string,
            options: FilterComponentData<Aliases[typeof key]>
        ) => ({
            type: 'custom',
            key: filterKey,
            component: aliases[key],
            data: options,
        });
    }

    renderer['custom'] = (
        key: string,
        component: Type<unknown>,
        options: Generic
    ) => ({
        type: 'custom',
        key,
        component,
        data: options,
    });

    return renderer as TableFilterOptions<Aliases>;
};
