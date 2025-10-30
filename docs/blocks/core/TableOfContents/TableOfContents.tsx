import { useEffect, useState, memo, useRef } from 'react';
import './TableOfContents.css';

interface TitleTree {
	name: string;
	id: string;
	children: TitleTree[];
}

const buildTitleTree = (titles: {title: string; id: string; level: number}[]): TitleTree[] => {
	if (titles.length === 0) return [];

	const result: TitleTree[] = [];
	const stack: {node: TitleTree; level: number}[] = [];

	for (let index = 0; index < titles.length; index++) {
		const currentTitle = titles[index];
		const newNode: TitleTree = {
			name: currentTitle.title,
			id: currentTitle.id,
			children: []
		};

		while (stack.length > 0 && stack[stack.length - 1].level >= currentTitle.level) {
			stack.pop();
		}

		if (stack.length === 0) {
			result.push(newNode);
		} else {
			stack[stack.length - 1].node.children.push(newNode);
		}

		stack.push({node: newNode, level: currentTitle.level});
	}

	return result;
};

const TableOfContentsTree = memo(({titles, activeId}: {titles: TitleTree[]; activeId: string | null}) => {
	if (titles.length === 0) return null;

	return (
		<ul>
			{titles.map((title) => (
				<TableOfContentsItem
					key={title.id}
					title={title}
					activeId={activeId}
				/>
			))}
		</ul>
	);
});

TableOfContentsTree.displayName = 'TableOfContentsTree';

const TableOfContentsItem = memo(({title, activeId}: {title: TitleTree; activeId: string | null}) => {
	const isActive = title.id === activeId;

	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		const element = document.getElementById(title.id);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			});
			window.history.pushState(null, '', `#${title.id}`);
		}
	};

	return (
		<li>
			<a
				href={`#${title.id}`}
				onClick={handleClick}
				className={isActive ? 'active' : ''}
			>
				{title.name}
			</a>
			{title.children.length > 0 && (
				<TableOfContentsTree titles={title.children} activeId={activeId} />
			)}
		</li>
	);
});

TableOfContentsItem.displayName = 'TableOfContentsItem';

export const TableOfContents = () => {
	const [titlesTree, setTitlesTree] = useState<TitleTree[]>([]);
	const [activeId, setActiveId] = useState<string | null>(null);
	const hasProcessed = useRef(false);
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		if (hasProcessed.current) return;

		hasProcessed.current = true;

		const timeoutId = setTimeout(() => {
			const titlesList = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
			const withLevels: {title: string; id: string; level: number}[] = [];

			titlesList.forEach((element) => {
				const title = element.textContent?.trim();
				const id = element.id;
				const levelText = element.nodeName[1];

				if (!title || !id) return;

				const level = +levelText;
				if (isNaN(level)) return;

				withLevels.push({title, id, level});
			});

			const tree = buildTitleTree(withLevels);
			setTitlesTree(tree);
		}, 100);

		return () => clearTimeout(timeoutId);
	}, []);

	useEffect(() => {
		const headingElements = Array.from(
			document.querySelectorAll('h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]')
		);

		if (headingElements.length === 0) return;

		const handleObserver = (entries: IntersectionObserverEntry[]) => {
			const visibleEntries = entries.filter(entry => entry.isIntersecting);

			if (visibleEntries.length > 0) {
				const topVisibleEntry = visibleEntries.reduce((top, entry) => {
					return entry.boundingClientRect.top < top.boundingClientRect.top ? entry : top;
				});

				setActiveId(topVisibleEntry.target.id);
			}
		};

		observerRef.current = new IntersectionObserver(handleObserver, {
			rootMargin: '-40% 0px -40% 0px',
			threshold: [0, 0.25, 0.5, 0.75, 1]
		});

		headingElements.forEach(element => {
			observerRef.current?.observe(element);
		});

		return () => {
			observerRef.current?.disconnect();
		};
	}, [titlesTree]);

	return (
		<div className="fkt-storybook-toc-container">
			<h1 className="fkt-sr-only">Table of contents</h1>
			<TableOfContentsTree titles={titlesTree} activeId={activeId} />
		</div>
	);
};
