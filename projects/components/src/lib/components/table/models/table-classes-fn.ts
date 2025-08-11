import { Identifiable } from "@shared/types/identifiable";

export type TableClassesFn<T extends Identifiable> = (item: T) => string;
