// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import tableExamplesBasicTableTemplate from "./basic-table/table-examples-basic-table.component.html" with {loader: "text"};
import tableExamplesBasicTableStyles from "./basic-table/table-examples-basic-table.component.scss" with {loader: "text"};
import tableExamplesBasicTableTypescript from "./basic-table/table-examples-basic-table.component.ts" with {loader: "text"};
import tableExamplesWithPaginationTemplate from "./with-pagination/table-examples-with-pagination.component.html" with {loader: "text"};
import tableExamplesWithPaginationStyles from "./with-pagination/table-examples-with-pagination.component.scss" with {loader: "text"};
import tableExamplesWithPaginationTypescript from "./with-pagination/table-examples-with-pagination.component.ts" with {loader: "text"};


export default {
	TableExamplesBasicTableComponent: {
		name: "TableExamplesBasicTable",
		files: [
		
			{
				name: "table-examples-basic-table.component.html",
				content: tableExamplesBasicTableTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "table-examples-basic-table.component.ts",
				content: tableExamplesBasicTableTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "table-examples-basic-table.component.scss",
				content: tableExamplesBasicTableStyles as string,
				language: "css" as "css",
			},		
		]
	},
	TableExamplesWithPaginationComponent: {
		name: "TableExamplesWithPagination",
		files: [
		
			{
				name: "table-examples-with-pagination.component.html",
				content: tableExamplesWithPaginationTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "table-examples-with-pagination.component.ts",
				content: tableExamplesWithPaginationTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "table-examples-with-pagination.component.scss",
				content: tableExamplesWithPaginationStyles as string,
				language: "css" as "css",
			},		
		]
	},
} as Record<string, ExternalExample>;
