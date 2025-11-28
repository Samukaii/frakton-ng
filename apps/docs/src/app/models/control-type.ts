const controlTypes = ["text", "boolean", "select", "number", "color", 'object', 'array', 'function', 'icon', 'date', 'hidden'] as const;
export type ControlType = (typeof controlTypes)[number];
