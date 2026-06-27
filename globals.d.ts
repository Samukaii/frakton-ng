declare module "*.md" {
	const content: string;
	export default content;
}

declare module "*.mdx" {
	const content: string;
	export default content;
}

interface EyeDropperOpenOptions {
    signal?: AbortSignal;
}

interface EyeDropperResult {
    sRGBHex: string;
}

interface EyeDropper {
    open(options?: EyeDropperOpenOptions): Promise<EyeDropperResult>;
}

interface Window {
    EyeDropper: {
        prototype: EyeDropper;
        new (): EyeDropper;
    };
}
