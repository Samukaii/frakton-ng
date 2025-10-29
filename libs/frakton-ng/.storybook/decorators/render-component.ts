import { Type } from '@angular/core';

interface FktStoryRenderComponentOptions {
	customDimensions?: {
		width?: string;
		height?: string;
	};
	noPadding?: boolean;
}

export const renderComponent = (component: Type<any>, options?: FktStoryRenderComponentOptions) => {
	return () => ({
		props: {
			component,
			customDimensions: options?.customDimensions,
			noPadding: options?.noPadding,
		},
	})
}
