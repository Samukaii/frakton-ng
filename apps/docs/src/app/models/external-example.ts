export interface ExternalExample {
	name: string;
	files: {
		name: string;
		content: string;
		language: 'angular2html' | 'typescript' | 'css';
	}[]
}
