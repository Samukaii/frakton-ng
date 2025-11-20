// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import fktPaginatorExamplesBasicTemplate from "./basic/fkt-paginator-examples-basic.component.html" with {loader: "text"};
import fktPaginatorExamplesBasicStyles from "./basic/fkt-paginator-examples-basic.component.scss" with {loader: "text"};
import fktPaginatorExamplesBasicTypescript from "./basic/fkt-paginator-examples-basic.component.ts" with {loader: "text"};
import fktPaginatorExamplesConfigurableTemplate from "./configurable/fkt-paginator-examples-configurable.component.html" with {loader: "text"};
import fktPaginatorExamplesConfigurableStyles from "./configurable/fkt-paginator-examples-configurable.component.scss" with {loader: "text"};
import fktPaginatorExamplesConfigurableTypescript from "./configurable/fkt-paginator-examples-configurable.component.ts" with {loader: "text"};
import fktPaginatorExamplesResponsiveTemplate from "./responsive/fkt-paginator-examples-responsive.component.html" with {loader: "text"};
import fktPaginatorExamplesResponsiveStyles from "./responsive/fkt-paginator-examples-responsive.component.scss" with {loader: "text"};
import fktPaginatorExamplesResponsiveTypescript from "./responsive/fkt-paginator-examples-responsive.component.ts" with {loader: "text"};


export default {
	FktPaginatorExamplesBasicComponent: {
		name: "FktPaginatorExamplesBasic",
		files: [
		
			{
				name: "fkt-paginator-examples-basic.component.html",
				content: fktPaginatorExamplesBasicTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "fkt-paginator-examples-basic.component.ts",
				content: fktPaginatorExamplesBasicTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "fkt-paginator-examples-basic.component.scss",
				content: fktPaginatorExamplesBasicStyles as string,
				language: "css" as "css",
			},		
		]
	},
	FktPaginatorExamplesConfigurableComponent: {
		name: "FktPaginatorExamplesConfigurable",
		files: [
		
			{
				name: "fkt-paginator-examples-configurable.component.html",
				content: fktPaginatorExamplesConfigurableTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "fkt-paginator-examples-configurable.component.ts",
				content: fktPaginatorExamplesConfigurableTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "fkt-paginator-examples-configurable.component.scss",
				content: fktPaginatorExamplesConfigurableStyles as string,
				language: "css" as "css",
			},		
		]
	},
	FktPaginatorExamplesResponsiveComponent: {
		name: "FktPaginatorExamplesResponsive",
		files: [
		
			{
				name: "fkt-paginator-examples-responsive.component.html",
				content: fktPaginatorExamplesResponsiveTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "fkt-paginator-examples-responsive.component.ts",
				content: fktPaginatorExamplesResponsiveTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "fkt-paginator-examples-responsive.component.scss",
				content: fktPaginatorExamplesResponsiveStyles as string,
				language: "css" as "css",
			},		
		]
	},
} as Record<string, ExternalExample>;
