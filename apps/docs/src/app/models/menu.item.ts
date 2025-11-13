export interface MenuItem {
	id: string;
	title: string;
	file: () => Promise<Record<string, any>>;
}
