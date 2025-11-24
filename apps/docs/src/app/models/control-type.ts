const controlTypes = ["text", "boolean", "select", "number", "color", 'object', 'array', 'function'] as const;
export type ControlType = (typeof controlTypes)[number];
