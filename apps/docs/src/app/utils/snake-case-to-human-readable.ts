import { capitalize } from "./capitalize";

export const snakeCaseToHumanReadable = (text: string) => capitalize(text).replace(/_/g, ' ');
