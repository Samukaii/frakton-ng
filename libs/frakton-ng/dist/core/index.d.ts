declare const fktColors: readonly ["red", "primary", "yellow", "green", "blue"];
type FktColor = typeof fktColors[number];

interface FktIdentifiable {
    id: number | string;
}

export { fktColors };
export type { FktColor, FktIdentifiable };
