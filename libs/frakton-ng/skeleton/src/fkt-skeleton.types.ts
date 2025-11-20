export type FktSkeletonType = 'text' | 'circle' | 'rect' | 'button' | 'image';

export type FktSkeletonAnimation = 'shimmer' | 'pulse' | 'wave' | 'none';

export interface FktSkeletonConfig {
	width?: string;
	height?: string;
	type?: FktSkeletonType;
	animation?: FktSkeletonAnimation;
	lines?: number;
	aspectRatio?: string;
	borderRadius?: string;
}