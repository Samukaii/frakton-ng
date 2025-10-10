export const getFocusableElementsSelectors = () => [
	"a[href]",
	"area[href]",
	"input:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"button:not([disabled])",
	"iframe",
	"object",
	"embed",
	'[tabindex]:not([tabindex="-1"])',
	'[contenteditable]:not([contenteditable="false"])'
]
