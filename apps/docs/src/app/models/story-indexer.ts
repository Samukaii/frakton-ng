import { DesignToken } from "./design-token";
import { ExternalExample } from "./external-example";

export interface StoryIndexer {
	id: string,
	title: string,
    componentName?: string,
    description?: string,
	file: () => Promise<Record<string, any>>
    type: 'story' | 'doc';
	designTokens?: DesignToken[];
	externalExamples?: () => Promise<Record<string, ExternalExample>>;
    stories?: {
        id: string;
        name: string;
        type: 'story' | 'introduction',
        componentName: string | null,
        description: string;
        level: number;
    }[]
    docSections?: {
        id: string;
        text: string;
        level: number;
    }[]
}
