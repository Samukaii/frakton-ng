import { Type } from '@angular/core';

export const renderComponent = (component: Type<any>) => {
	return () => ({
		props: {
			component
		},
	})
}
