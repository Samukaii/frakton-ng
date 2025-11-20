export interface FktPaginatorState {
	page: number;
	pageSize: number;
	total: number;
}

export interface FktPaginatorEvent {
	page: number;
	pageSize: number;
}

export interface FktPaginatorConfig {
	showFirstLast?: boolean;
	showPrevNext?: boolean;
	showPageNumbers?: boolean;
	showPageSize?: boolean;
	showInfo?: boolean;
	maxVisiblePages?: number;
	pageSizeOptions?: number[];
}

export const DEFAULT_PAGINATOR_CONFIG: Required<FktPaginatorConfig> = {
	showFirstLast: true,
	showPrevNext: true,
	showPageNumbers: true,
	showPageSize: true,
	showInfo: true,
	maxVisiblePages: 5,
	pageSizeOptions: [10, 20, 50, 100]
};
