const controlTypes = ["text", "boolean", "select", "number"] as const;
export type ControlType = (typeof controlTypes)[number];
