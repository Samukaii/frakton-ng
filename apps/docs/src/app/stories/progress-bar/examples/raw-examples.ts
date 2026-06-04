// @ts-nocheck
import { ExternalExample } from '@/models/external-example';
import basicUsageTemplate from "./basic-usage/basic-usage.component.html" with {loader: "text"};
import basicUsageStyles from "./basic-usage/basic-usage.component.scss" with {loader: "text"};
import basicUsageTypescript from "./basic-usage/basic-usage.component.ts" with {loader: "text"};
import dashboardMetricsTemplate from "./dashboard-metrics/dashboard-metrics.component.html" with {loader: "text"};
import dashboardMetricsStyles from "./dashboard-metrics/dashboard-metrics.component.scss" with {loader: "text"};
import dashboardMetricsTypescript from "./dashboard-metrics/dashboard-metrics.component.ts" with {loader: "text"};
import withLabelsTemplate from "./with-labels/with-labels.component.html" with {loader: "text"};
import withLabelsStyles from "./with-labels/with-labels.component.scss" with {loader: "text"};
import withLabelsTypescript from "./with-labels/with-labels.component.ts" with {loader: "text"};


export default {
	BasicUsageComponent: {
		name: "BasicUsage",
		files: [
		
			{
				name: "basic-usage.component.html",
				content: basicUsageTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "basic-usage.component.ts",
				content: basicUsageTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "basic-usage.component.scss",
				content: basicUsageStyles as string,
				language: "css" as const,
			},		
		]
	},
	DashboardMetricsComponent: {
		name: "DashboardMetrics",
		files: [
		
			{
				name: "dashboard-metrics.component.html",
				content: dashboardMetricsTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "dashboard-metrics.component.ts",
				content: dashboardMetricsTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "dashboard-metrics.component.scss",
				content: dashboardMetricsStyles as string,
				language: "css" as const,
			},		
		]
	},
	WithLabelsComponent: {
		name: "WithLabels",
		files: [
		
			{
				name: "with-labels.component.html",
				content: withLabelsTemplate as string,
				language: "angular-html" as const,
			},		
			{
				name: "with-labels.component.ts",
				content: withLabelsTypescript as string,
				language: "typescript" as const,
			},		
			{
				name: "with-labels.component.scss",
				content: withLabelsStyles as string,
				language: "css" as const,
			},		
		]
	},
} as Record<string, ExternalExample>;
