export type StringOrNumberKeys<T> = {
    [Key in keyof T]: T[Key] extends string
        ? Key
        : T[Key] extends number
        ? Key
        : never;
}[keyof T];
