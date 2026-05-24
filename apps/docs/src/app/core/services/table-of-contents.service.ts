import { Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TableOfContentsService {
	readonly sections = signal<{ id: string; text: string; level: number }[]>([]);
    readonly storyId = signal('');

    setStoryId(id: string) {
        this.storyId.set(id);
    }

	setSections(sections: { id: string; text: string; level: number }[]) {
		this.sections.set(sections);
	}
}
