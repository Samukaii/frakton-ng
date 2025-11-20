// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import fktSkeletonExamplesAnimationsTemplate from "./animations/fkt-skeleton-examples-animations.component.html" with {loader: "text"};
import fktSkeletonExamplesAnimationsStyles from "./animations/fkt-skeleton-examples-animations.component.scss" with {loader: "text"};
import fktSkeletonExamplesAnimationsTypescript from "./animations/fkt-skeleton-examples-animations.component.ts" with {loader: "text"};
import fktSkeletonExamplesBasicTemplate from "./basic/fkt-skeleton-examples-basic.component.html" with {loader: "text"};
import fktSkeletonExamplesBasicStyles from "./basic/fkt-skeleton-examples-basic.component.scss" with {loader: "text"};
import fktSkeletonExamplesBasicTypescript from "./basic/fkt-skeleton-examples-basic.component.ts" with {loader: "text"};
import fktSkeletonExamplesTypesTemplate from "./types/fkt-skeleton-examples-types.component.html" with {loader: "text"};
import fktSkeletonExamplesTypesStyles from "./types/fkt-skeleton-examples-types.component.scss" with {loader: "text"};
import fktSkeletonExamplesTypesTypescript from "./types/fkt-skeleton-examples-types.component.ts" with {loader: "text"};


export default {
	FktSkeletonExamplesAnimationsComponent: {
		name: "FktSkeletonExamplesAnimations",
		files: [
		
			{
				name: "fkt-skeleton-examples-animations.component.html",
				content: fktSkeletonExamplesAnimationsTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "fkt-skeleton-examples-animations.component.ts",
				content: fktSkeletonExamplesAnimationsTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "fkt-skeleton-examples-animations.component.scss",
				content: fktSkeletonExamplesAnimationsStyles as string,
				language: "css" as "css",
			},		
		]
	},
	FktSkeletonExamplesBasicComponent: {
		name: "FktSkeletonExamplesBasic",
		files: [
		
			{
				name: "fkt-skeleton-examples-basic.component.html",
				content: fktSkeletonExamplesBasicTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "fkt-skeleton-examples-basic.component.ts",
				content: fktSkeletonExamplesBasicTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "fkt-skeleton-examples-basic.component.scss",
				content: fktSkeletonExamplesBasicStyles as string,
				language: "css" as "css",
			},		
		]
	},
	FktSkeletonExamplesTypesComponent: {
		name: "FktSkeletonExamplesTypes",
		files: [
		
			{
				name: "fkt-skeleton-examples-types.component.html",
				content: fktSkeletonExamplesTypesTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "fkt-skeleton-examples-types.component.ts",
				content: fktSkeletonExamplesTypesTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "fkt-skeleton-examples-types.component.scss",
				content: fktSkeletonExamplesTypesStyles as string,
				language: "css" as "css",
			},		
		]
	},
} as Record<string, ExternalExample>;
