export const getGlobalTheme = () => {
	const theme = localStorage.getItem('fkt-storybook-theme') ?? 'light'

	return theme as 'light' | 'dark';
}
