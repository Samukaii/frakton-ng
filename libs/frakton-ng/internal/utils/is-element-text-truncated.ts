export const isElementTextTruncated = (element: HTMLElement) => {
	return element.scrollHeight > element.offsetHeight || element.scrollWidth > element.offsetWidth;
}
