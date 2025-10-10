const controlTypes = ["text", "boolean", "select"] as const;
export type ControlType = (typeof controlTypes)[number];
