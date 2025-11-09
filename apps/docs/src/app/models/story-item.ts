import { DesignToken } from "./design-token";
import { ExternalExample } from "./external-example";

export interface StoryItem {
	id: string,
	title: string,
	file: () => Promise<Record<string, any>>
	designTokens?: DesignToken[];
	externalExamples?: () => Promise<Record<string, ExternalExample>>;
}
