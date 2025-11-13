import { Component, computed, inject, output, signal } from '@angular/core';
import { FktInputComponent } from 'frakton-ng/input';
import { STORIES_MAP } from '@/stories/stories-map';
import { pascalToHumanReadable } from '@/utils/pascal-to-human-readable';
import { FktIconComponent } from 'frakton-ng/icon';
import { FormControlSuffixDirective } from 'frakton-ng/forms';
import { Router, RouterLink } from '@angular/router';
import { FktNavigableListDirective } from 'frakton-ng/navigable-list';

function getHighlightedExcerpt(text: string, search: string, maxLength = 60) {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, 'ig');
    const idx = text.toLowerCase().indexOf(search.toLowerCase());
    if (idx === -1 || text.length <= maxLength) {
        return text.replace(regex, '<span class="highlight">$1</span>');
    }
    let start = Math.max(0, idx - Math.floor(maxLength / 2));
    let end = Math.min(text.length, start + maxLength);
    if (end - start < maxLength) start = Math.max(0, end - maxLength);
    let result = text.slice(start, end);
    if (start > 0) result = '…' + result;
    if (end < text.length) result = result + '…';
    return result.replace(regex, '<span class="highlight">$1</span>');
}

@Component({
    selector: 'fkt-omni-search',
    imports: [
        FktInputComponent,
        FktIconComponent,
        FormControlSuffixDirective,
        RouterLink,
        FktNavigableListDirective
    ],
    templateUrl: './omni-search.component.html',
    styleUrl: './omni-search.component.scss',
    host: {
        "(click)": "close.emit()",
        "(keydown.esc)": "close.emit()"
    }
})
export class OmniSearchComponent {
    close = output();

    router = inject(Router);

    items = STORIES_MAP.flatMap(meta => {
        return [
            {
                id: meta.id,
                title: meta.title.split('/').at(-1)!,
                type: 'documentation',
                description: meta.description,
                link: this.router.createUrlTree(['home', 'docs', meta.id])
            },
            meta.stories?.map(story => {
                return {
                    id: story.id,
                    type: 'section',
                    title: pascalToHumanReadable(story.name),
                    description: story.description as string | undefined,
                    link: this.router.createUrlTree(['home', 'docs', meta.id], {
                        fragment: story.id
                    })
                }
            }) ?? []
        ].flat()
    });

    search = signal("");

    filtered = computed(() => {
        const search = this.search();
        const limit = 120;

        if (!search) return this.items.map(item => ({
            ...item,
            description: item.description ? item.description.length > limit ? item.description?.slice(0, limit) + '...' : item.description : ''
        }));

        const match = new RegExp(`(${search})`, 'ig');

        return this.items.filter(item => {
            return item.title.match(match) || item.description?.match(match)
        }).map(item => {
            return {
                ...item,
                title: item.title.replaceAll(match, '<span class="highlight">$1</span>'),
                description: getHighlightedExcerpt(item.description ?? '', search, limit),
            }
        })
    })


    keyboardSelect($event: number) {
        const titles = this.filtered();
        const selected = titles[$event];

        if(!selected) return

        this.router.navigateByUrl(selected.link.toString());
        this.close.emit();
    }
}
