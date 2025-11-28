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
				language: "html" as "html",
			},		
			{
				name: "basic-usage.component.ts",
				content: basicUsageTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "basic-usage.component.scss",
				content: basicUsageStyles as string,
				language: "css" as "css",
			},		
		]
	},
	DashboardMetricsComponent: {
		name: "DashboardMetrics",
		files: [
		
			{
				name: "dashboard-metrics.component.html",
				content: dashboardMetricsTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "dashboard-metrics.component.ts",
				content: dashboardMetricsTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "dashboard-metrics.component.scss",
				content: dashboardMetricsStyles as string,
				language: "css" as "css",
			},		
		]
	},
	WithLabelsComponent: {
		name: "WithLabels",
		files: [
		
			{
				name: "with-labels.component.html",
				content: withLabelsTemplate as string,
				language: "html" as "html",
			},		
			{
				name: "with-labels.component.ts",
				content: withLabelsTypescript as string,
				language: "typescript" as "typescript",
			},		
			{
				name: "with-labels.component.scss",
				content: withLabelsStyles as string,
				language: "css" as "css",
			},		
		]
	},
} as Record<string, ExternalExample>;
