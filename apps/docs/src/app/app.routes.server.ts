import { RenderMode, ServerRoute } from '@angular/ssr';
import { STORIES_MAP } from '@/stories/stories-map';

export const serverRoutes: ServerRoute[] = [
    {
        path: "",
        renderMode: RenderMode.Prerender,
    },
    {
        path: "docs",
        renderMode: RenderMode.Prerender,
    },
    {
        path: "docs/:docId",
        renderMode: RenderMode.Prerender,
        async getPrerenderParams() {
            return STORIES_MAP.map(story => ({
                docId: story.id,
            }));
        },
    },
    {
        path: 'docs/:docId/:tab',
        renderMode: RenderMode.Prerender,
        async getPrerenderParams() {
            return STORIES_MAP.flatMap(story => [
                {
                    docId: story.id,
                    tab: 'features'
                },
                {
                    docId: story.id,
                    tab: 'api-reference'
                }
            ]);
        },
    },
    {
        path: '**',
        renderMode: RenderMode.Client
    }
];
