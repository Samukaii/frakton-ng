import { DesignToken } from "./design-token";
import { ExternalExample } from "./external-example";

export interface StoryIndexer {
	id: string,
	title: string,
    description?: string,
	file: () => Promise<Record<string, any>>
	designTokens?: DesignToken[];
	externalExamples?: () => Promise<Record<string, ExternalExample>>;
    stories?: {
        id: string;
        name: string;
        description: string;
    }[]
}
