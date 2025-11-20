import { FktSkeletonComponent, FktSkeletonContainerComponent } from 'frakton-ng/skeleton';
import { FktSkeletonExamplesAnimationsComponent, FktSkeletonExamplesBasicComponent, FktSkeletonExamplesTypesComponent } from './examples';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
// @ts-expect-error
import documentation from './fkt-skeleton.docs.md' with { loader: "text" };
import { DesignToken } from '@/models/design-token';
import designTokens from './fkt-skeleton-design-tokens.json';

const meta: Meta = {
	title: "Components/Feedback/Skeleton",
	description: "The FktSkeleton component provides loading placeholders with multiple types, animations, and configurable appearance. Perfect for indicating content loading states with realistic previews.",
	component: FktSkeletonComponent,
    designTokens: designTokens as DesignToken[],
	documentation,
	argTypes: {
		width: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			defaultValue: "'100%'",
			description: 'Width of the skeleton element'
		},
		height: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			description: 'Height of the skeleton element (auto-calculated based on type if not provided)'
		},
		type: {
			control: 'select',
			category: "Attributes",
			type: 'FktSkeletonType',
			options: ['text', 'circle', 'rect', 'button', 'image'],
			defaultValue: "'rect'",
			description: 'Type of skeleton to display'
		},
		animation: {
			control: 'select',
			category: "Attributes",
			type: 'FktSkeletonAnimation',
			options: ['shimmer', 'pulse', 'wave', 'none'],
			defaultValue: "'shimmer'",
			description: 'Animation effect for the skeleton'
		},
		lines: {
			control: 'number',
			category: "Attributes",
			type: 'number',
			defaultValue: "1",
			description: 'Number of lines for text type skeleton'
		},
		aspectRatio: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			description: 'Aspect ratio for image type skeleton (e.g., "16/9")'
		},
		borderRadius: {
			control: 'text',
			category: "Attributes",
			type: 'string',
			description: 'Custom border radius (overrides type defaults)'
		}
	}
};

export default meta;

export const Basic: Story<FktSkeletonComponent> = {
	description: "Basic skeleton component with configurable properties.",
	args: {
		width: '200px',
		height: '50px',
		type: 'rect',
		animation: 'shimmer'
	}
};

export const BasicExample: Story<FktSkeletonExamplesBasicComponent> = {
	component: FktSkeletonExamplesBasicComponent,
	description: "Common skeleton usage patterns and layouts.",
	args: {}
};

export const TypesExample: Story<FktSkeletonExamplesTypesComponent> = {
	component: FktSkeletonExamplesTypesComponent,
	description: "Different skeleton types: text, circle, rect, button, and image.",
	args: {
		showLabels: true
	}
};

export const AnimationsExample: Story<FktSkeletonExamplesAnimationsComponent> = {
	component: FktSkeletonExamplesAnimationsComponent,
	description: "Various animation effects: shimmer, pulse, wave, and none.",
	args: {
		type: 'rect'
	}
};
