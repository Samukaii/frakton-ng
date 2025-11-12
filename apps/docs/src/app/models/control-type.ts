const controlTypes = ["text", "boolean", "select", "number", "color", 'object'] as const;
export type ControlType = (typeof controlTypes)[number];
