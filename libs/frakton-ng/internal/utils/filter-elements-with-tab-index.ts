export const filterElementsWithTabIndex = (elements: HTMLElement[]) =>
  elements.filter(element => element.tabIndex !== -1)
