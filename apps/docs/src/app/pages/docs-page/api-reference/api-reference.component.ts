import { Component, input } from '@angular/core';
import { MarkdownWrapperComponent } from '@/components/markdown/markdown-wrapper.component';
import { FktButtonComponent } from 'frakton-ng/button';
import { createClipboardCopy } from '@/utils/create-clipboard-copy';
import { StoryResolved } from '@/models/story.resolved';
import { ArgType } from '@/models/arg-type';

@Component({
    selector: 'app-api-reference',
    imports: [MarkdownWrapperComponent, FktButtonComponent],
    templateUrl: './api-reference.component.html',
    styleUrl: './api-reference.component.scss',
})
export class ApiReferenceComponent {
    title = input.required<string>();
    docs = input<string>();
    story = input.required<StoryResolved | null>();

    protected readonly clipboard = createClipboardCopy(async () => {
        const docs = this.docs() ?? '';
        const argTypes = this.story()?.meta?.argTypes ?? {};
        const componentName = this.story()?.meta.componentName ?? '';

        const owners = this.getOwners(argTypes);

        let argsSection = '';

        owners.forEach(owner => {
            argsSection += `### ${owner ?? componentName}`;
            argsSection += '\n';

            argsSection += this.generateMdTableForOwner(argTypes, owner);
            argsSection += '\n\n';
        })

        return docs.replace('<arg-types></arg-types>', argsSection);
    });

    private getOwners(argTypes: Record<string, ArgType>) {
        const owners = new Set<string | null>();

        Object.values(argTypes).forEach((argType) => {
            owners.add(argType.owner?.name ?? null);
        });

        return Array.from(owners);
    }

    private generateMdTableForOwner(argTypes: Record<string, ArgType>, owner: string | null) {
        const lines: {
            name: string;
            type: string;
            description: string;
            defaultValue: string;
        }[] = [
            {
                name: 'Name',
                type: 'Type',
                description: 'Description',
                defaultValue: 'Default value',
            },
        ];
        const biggerWidths = {
            name: lines[0].name.length,
            type: lines[0].type.length,
            description: lines[0].description.length,
            defaultValue: lines[0].defaultValue.length,
        };

        Object.entries(argTypes).forEach(([name, argType]) => {
            const argTypeOwner = argType.owner?.name ?? null;

            if (owner !== argTypeOwner) return;

            let argName = name.replaceAll('|', '\\|');
            const type = argType.type.replaceAll('|', '\\|');
            const description =
                argType.description?.replaceAll('|', '\\|') ?? '';
            const defaultValue =
                argType.defaultValue?.replaceAll('|', '\\|') ?? '\\-\\-\\-';

            if (argType.required) argName = `* ${argName}`;

            if (biggerWidths.name < argName.length)
                biggerWidths.name = argName.length;

            if (biggerWidths.type < type.length)
                biggerWidths.type = type.length;

            if (biggerWidths.description < description.length)
                biggerWidths.description = description.length;

            if (biggerWidths.defaultValue < defaultValue.length)
                biggerWidths.defaultValue = defaultValue.length;

            lines.push({ name: argName, type, description, defaultValue });
        });

        const adjustedLines = lines.map((line) => {
            return {
                name: line.name.padEnd(biggerWidths.name, ' '),
                type: line.type.padEnd(biggerWidths.type, ' '),
                description: line.description.padEnd(
                    biggerWidths.description,
                    ' '
                ),
                defaultValue: line.defaultValue.padEnd(
                    biggerWidths.defaultValue,
                    ' '
                ),
            };
        });

        adjustedLines.splice(1, 0, {
            name: '-'.repeat(biggerWidths.name),
            type: '-'.repeat(biggerWidths.type),
            description: '-'.repeat(biggerWidths.description),
            defaultValue: '-'.repeat(biggerWidths.defaultValue),
        });

        return adjustedLines
            .map(
                (cell) =>
                    `| ${cell.name} | ${cell.type} | ${cell.description} | ${cell.defaultValue} |`
            )
            .join('\n')
            .replaceAll('- | -', '--|--')
            .replaceAll('| -', '|--')
            .replaceAll('- |', '--|');
    }
}
