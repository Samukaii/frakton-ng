import { Identifiable } from "@shared/types/identifiable";
import { TableAction } from "./table-action";

export type TableActionFn<T extends Identifiable> = (item: T) => TableAction[];
