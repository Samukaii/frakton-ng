export interface ExternalExample {
	name: string;
	files: {
		name: string;
		content: string;
		language: 'html' | 'typescript' | 'css';
	}[]
}
