/**
 * Verifica se o elemento "target" está contido dentro do "container".
 * Isso inclui casos em que o target é o próprio container.
 */
export function isElementInside(target: HTMLElement, container: HTMLElement): boolean {
	let node: HTMLElement | null = target
	while (node) {
		if (node === container) {
			return true
		}
		node = node.parentElement
	}
	return false
}
