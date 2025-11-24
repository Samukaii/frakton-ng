export const fktAvatarSizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
export const fktAvatarShapes = ['circle', 'rounded', 'square'] as const;
export const fktAvatarVariants = ['image', 'initials', 'icon', 'placeholder'] as const;

export type FktAvatarSize = (typeof fktAvatarSizes)[number];
export type FktAvatarShape = (typeof fktAvatarShapes)[number];
export type FktAvatarVariant = (typeof fktAvatarVariants)[number];
