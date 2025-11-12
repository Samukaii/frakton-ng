import { StoryIndexer } from "@/models/story-indexer";
import { MenuGroup } from "@/models/menu.group";
import { MenuItem } from "@/models/menu.item";

export function buildTree(items: StoryIndexer[]): (MenuGroup | MenuItem)[] {
	type Node = { [segment: string]: Node | MenuItem };

	const root: Node = {};

	for (const item of items) {
		const parts = item.title.split('/');
		let node = root;

		for (let i = 0; i < parts.length; i++) {
			const part = parts[i];
			if (i === parts.length - 1) {

				node[part] = {
					id: item.id,
					title: part,
					file: item.file,
				};
			} else {
				if (!node[part]) {
					node[part] = {};
				}
				node = node[part] as Node;
			}
		}
	}

	function toArray(node: Node): (MenuGroup | MenuItem)[] {
		return Object.entries(node).map(([key, value]) => {
			if ('id' in value) {
				return value as MenuItem;
			}
			return {
				title: key,
				children: toArray(value as Node),
			} as MenuGroup;
		});
	}

	return toArray(root);
}
