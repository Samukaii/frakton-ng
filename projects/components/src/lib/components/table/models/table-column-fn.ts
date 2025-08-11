import { TableColumn } from "./table-column";
import { Identifiable } from '@shared/types/identifiable';

export type TableColumnFn<T extends Identifiable> = (item: T) => TableColumn[]
