export interface ExternalExample {
	name: string;
	files: {
		name: string;
		content: string;
		language: 'angular-html' | 'typescript' | 'css';
	}[]
}
