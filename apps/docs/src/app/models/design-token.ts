export interface DesignToken {
	name: string;
	reference: string;
	category: string;
	description: string;
	component?: string;
	type: 'size' | 'color';
	defaultValue: string;
}
