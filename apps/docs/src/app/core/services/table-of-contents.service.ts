import { Injectable } from '@angular/core';
import { StoryItem } from '@/models/story-item';
import { StoryData } from '@/models/story.data';
import { Meta } from '@/models/meta';
import { Story } from '@/models/story';
import { ExternalExample } from '@/models/external-example';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TableOfContentsService {
	private watch$ = new Subject<void>();

    public generate() {
        this.watch$.next();
    }

    watch() {
        return this.watch$.asObservable();
    }
}
