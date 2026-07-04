import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const workspaceRoot = resolve(fileURLToPath(new URL('../..', import.meta.url)));
const iconsRoot = resolve(workspaceRoot, 'icons');
const outputRoot = resolve(
    workspaceRoot,
    'libs/frakton-ng/icon/src/static/generated'
);

const variants = ['outline', 'solid', 'mini', 'micro'] as const;
const ignoredRootAttributes = new Set(['xmlns', 'aria-hidden', 'data-slot']);

type IconVariant = (typeof variants)[number];

interface ParsedSvg {
    attributes: Map<string, string>;
    content: string;
}

interface VariantOutput {
    variant: IconVariant;
    iconNames: string[];
    iconEntries: Array<readonly [string, string]>;
    viewBox: string;
    rootAttributes: Map<string, string>;
}

async function generateIcons(): Promise<void> {
    const outputs = await Promise.all(variants.map(generateVariant));
    assertSameIconNames(outputs);
    const allIconNames = outputs[0].iconNames;

    await mkdir(outputRoot, { recursive: true });
    await Promise.all([
        ...outputs.map((output) =>
            writeGeneratedFile(
                `${output.variant}-icon-contents.ts`,
                renderIconContents(output.variant, output.iconEntries)
            )
        ),
        writeGeneratedFile(
            'fkt-built-in-icon-name.ts',
            renderIconNameType(allIconNames)
        ),
        writeGeneratedFile(
            'fkt-built-in-icon-variant.ts',
            renderVariantConfig(outputs)
        ),
        writeGeneratedFile('index.ts', renderIndex()),
    ]);

    for (const output of outputs) {
        console.log(
            `Generated ${output.variant} icon catalog (${output.iconNames.length} icons)`
        );
    }
    console.log(`Generated built-in icon names (${allIconNames.length} names)`);
}

async function generateVariant(variant: IconVariant): Promise<VariantOutput> {
    const variantRoot = resolve(iconsRoot, variant);
    const entries = await readdir(variantRoot, { withFileTypes: true });
    const iconFiles = entries
        .filter((entry) => entry.isFile() && entry.name.endsWith('.svg'))
        .sort((left, right) => compareStrings(left.name, right.name));

    if (iconFiles.length === 0) {
        throw new Error(`No SVG icons found in ${variantRoot}`);
    }

    const iconEntries: Array<readonly [string, string]> = [];
    let expectedRootAttributes: Map<string, string> | undefined;
    let viewBox: string | undefined;

    for (const iconFile of iconFiles) {
        const iconName = iconFile.name.slice(0, -'.svg'.length);
        validateIconName(iconName, iconFile.name);

        const source = await readFile(
            resolve(variantRoot, iconFile.name),
            'utf8'
        );
        const parsed = parseSvg(source, `${variant}/${iconFile.name}`);
        const currentViewBox = parsed.attributes.get('viewBox');

        if (!currentViewBox) {
            throw new Error(
                `${variant}/${iconFile.name} does not define a viewBox`
            );
        }

        parsed.attributes.delete('viewBox');
        for (const attribute of ignoredRootAttributes) {
            parsed.attributes.delete(attribute);
        }

        if (!expectedRootAttributes) {
            expectedRootAttributes = parsed.attributes;
            viewBox = currentViewBox;
        } else {
            assertSameRootDefinition(
                variant,
                iconFile.name,
                viewBox!,
                currentViewBox,
                expectedRootAttributes,
                parsed.attributes
            );
        }

        iconEntries.push([iconName, minifySvgContent(parsed.content)]);
    }

    return {
        variant,
        iconNames: iconEntries.map(([name]) => name),
        iconEntries,
        viewBox: viewBox!,
        rootAttributes: expectedRootAttributes!,
    };
}

function assertSameIconNames(outputs: VariantOutput[]): void {
    const expectedNames = outputs[0].iconNames;
    const expectedNameSet = new Set(expectedNames);

    for (const output of outputs.slice(1)) {
        const actualNameSet = new Set(output.iconNames);
        const missingNames = expectedNames.filter(
            (name) => !actualNameSet.has(name)
        );
        const unexpectedNames = output.iconNames.filter(
            (name) => !expectedNameSet.has(name)
        );

        if (missingNames.length || unexpectedNames.length) {
            throw new Error(
                [
                    `${output.variant} must contain the same icon names as ${outputs[0].variant}.`,
                    missingNames.length
                        ? `Missing: ${missingNames.join(', ')}.`
                        : '',
                    unexpectedNames.length
                        ? `Unexpected: ${unexpectedNames.join(', ')}.`
                        : '',
                ]
                    .filter(Boolean)
                    .join(' ')
            );
        }
    }
}

function parseSvg(source: string, sourceName: string): ParsedSvg {
    const match = source.match(/^\s*<svg\b([^>]*)>([\s\S]*)<\/svg>\s*$/);

    if (!match) {
        throw new Error(
            `${sourceName} must contain exactly one root <svg> element`
        );
    }

    if (/<(?:script|foreignObject)\b/i.test(match[2])) {
        throw new Error(`${sourceName} contains a disallowed SVG element`);
    }

    if (/\son[a-z]+\s*=/i.test(source)) {
        throw new Error(`${sourceName} contains a disallowed event attribute`);
    }

    return {
        attributes: parseAttributes(match[1], sourceName),
        content: match[2],
    };
}

function parseAttributes(
    source: string,
    sourceName: string
): Map<string, string> {
    const attributes = new Map<string, string>();
    const attributePattern = /([:\w-]+)\s*=\s*(["'])(.*?)\2/g;
    let cursor = 0;
    let match: RegExpExecArray | null;

    while ((match = attributePattern.exec(source))) {
        if (source.slice(cursor, match.index).trim()) {
            throw new Error(
                `Could not parse root attributes from ${sourceName}`
            );
        }

        const [, name, , value] = match;
        if (attributes.has(name)) {
            throw new Error(
                `${sourceName} contains duplicate attribute "${name}"`
            );
        }

        attributes.set(name, value);
        cursor = attributePattern.lastIndex;
    }

    if (source.slice(cursor).trim()) {
        throw new Error(`Could not parse root attributes from ${sourceName}`);
    }

    return attributes;
}

function assertSameRootDefinition(
    variant: IconVariant,
    fileName: string,
    expectedViewBox: string,
    actualViewBox: string,
    expectedAttributes: Map<string, string>,
    actualAttributes: Map<string, string>
): void {
    if (
        expectedViewBox !== actualViewBox ||
        serializeAttributes(expectedAttributes) !==
            serializeAttributes(actualAttributes)
    ) {
        throw new Error(
            `${variant}/${fileName} has root attributes that differ from the ${variant} catalog`
        );
    }
}

function validateIconName(iconName: string, fileName: string): void {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(iconName)) {
        throw new Error(
            `${fileName} must use a lowercase kebab-case icon name`
        );
    }
}

function minifySvgContent(content: string): string {
    return content.trim().replace(/>\s+</g, '><');
}

function renderIconContents(
    variant: IconVariant,
    entries: Array<readonly [string, string]>
): string {
    const propertyName = `${variant}IconContents`;
    const properties = entries
        .map(([name, content]) => `\t${quote(name)}: ${quote(content)},`)
        .join('\n');

    return `${generatedFileHeader()}
import type { FktBuiltInIconName } from './fkt-built-in-icon-name';

export const ${propertyName}: Readonly<
\tRecord<FktBuiltInIconName, string>
> = {
${properties}
};
`;
}

function renderIconNameType(iconNames: string[]): string {
    const names = iconNames.map((name) => `\t| ${quote(name)}`).join('\n');

    return `${generatedFileHeader()}
export type FktBuiltInIconName =
${names};
`;
}

function renderVariantConfig(outputs: VariantOutput[]): string {
    const variantNames = variants
        .map((variant) => `\t| ${quote(variant)}`)
        .join('\n');
    const configs = outputs
        .map((output) => {
            const attributes = [...output.rootAttributes.entries()]
                .map(
                    ([name, value]) => `\t\t\t${quote(name)}: ${quote(value)},`
                )
                .join('\n');

            return `\t${quote(output.variant)}: {
\t\tviewBox: ${quote(output.viewBox)},
\t\tattributes: {
${attributes}
\t\t},
\t},`;
        })
        .join('\n');

    return `${generatedFileHeader()}
export type FktBuiltInIconVariant =
${variantNames};

export interface FktBuiltInIconVariantConfig {
\treadonly viewBox: string;
\treadonly attributes: Readonly<Record<string, string>>;
}

export const fktBuiltInIconVariantConfig: Readonly<
\tRecord<FktBuiltInIconVariant, FktBuiltInIconVariantConfig>
> = {
${configs}
};
`;
}

function renderIndex(): string {
    const exports = variants
        .map((variant) => `export * from './${variant}-icon-contents';`)
        .join('\n');

    return `${generatedFileHeader()}
export * from './fkt-built-in-icon-name';
export * from './fkt-built-in-icon-variant';
${exports}
`;
}

function generatedFileHeader(): string {
    return `// This file is auto-generated by scripts/icon-generator/generate-icons.ts.
// Do not edit it manually.`;
}

function serializeAttributes(attributes: Map<string, string>): string {
    return JSON.stringify(
        [...attributes.entries()].sort(([left], [right]) =>
            compareStrings(left, right)
        )
    );
}

function compareStrings(left: string, right: string): number {
    return left < right ? -1 : left > right ? 1 : 0;
}

function quote(value: string): string {
    return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

async function writeGeneratedFile(
    fileName: string,
    content: string
): Promise<void> {
    await writeFile(resolve(outputRoot, fileName), content, 'utf8');
}

generateIcons().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
