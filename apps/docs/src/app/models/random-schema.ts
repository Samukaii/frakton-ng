import { Generic } from "./generic";
import { RandomSchemaType } from "./random-schema-type";

export type RandomSchema<T = Generic> = {
    [key in keyof T]?: RandomSchemaType | RandomSchema<T[key]> | ((data: Partial<T>, position: number) => any)
};
