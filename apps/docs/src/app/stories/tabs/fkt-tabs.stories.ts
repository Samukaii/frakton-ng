import { Meta } from '@/models/meta';
import { FktTabsListComponent, fktTabsRenderModes } from 'frakton-ng/tabs';
import documentation from './fkt-tabs.docs.md' with { loader: 'text' };
import { Story } from '@/models/story';
import { DesignToken } from '@/models/design-token';
import designTokens from './fkt-tabs-design-tokens.json';
import { TabsBasicComponent } from '@/stories/tabs/examples/basic/tabs-basic.component';
import { TabsRenderModesComponent } from '@/stories/tabs/examples/render-modes/tabs-render-modes.component';
import { TabsWithIconsComponent } from '@/stories/tabs/examples/with-icons/tabs-with-icons.component';

const meta: Meta<FktTabsListComponent> = {
    title: "Components/Navigation/Tabs",
    description: "A compound component for organising content into named panels, with lazy, eager, and destructive render strategies.",
    designTokens: designTokens as DesignToken[],
    component: FktTabsListComponent,
    argTypes: {
        activeTab: {
            control: 'text',
            type: 'string',
            description: "Key of the currently selected tab. Bind with `[(activeTab)]` for two-way control. When unset, the first visible tab is selected automatically.",
            category: "Attributes"
        },
        renderMode: {
            control: 'select',
            options: fktTabsRenderModes,
            type: 'FktTabsRenderMode',
            import: "import { FktTabsRenderMode } from 'frakton-ng/tabs'",
            defaultValue: 'lazy',
            description: "Controls how tab content is managed in the DOM. `lazy` (default) renders each panel on first visit and keeps it alive. `eager` renders all panels immediately. `destructive` destroys and recreates content on every navigation.",
            category: "Attributes"
        },
        hideTabsWhenOnlyOne: {
            control: 'boolean',
            type: 'boolean',
            defaultValue: 'false',
            description: "Hides the tab header row when only one tab is visible, letting the content occupy the full space.",
            category: "Attributes"
        },
    },
    documentation
}

export const BasicUsage: Story<TabsBasicComponent> = {
    component: TabsBasicComponent,
    description: "Default tabs using lazy rendering. Content is created on first visit and kept in DOM when switching away.",
    args: {}
}

export const WithIcons: Story<TabsWithIconsComponent> = {
    component: TabsWithIconsComponent,
    description: "Tab headers with icons alongside labels. Pass an icon name via the `icon` input on each `fkt-tab`.",
    args: {}
}

export const RenderModes: Story<TabsRenderModesComponent> = {
    component: TabsRenderModesComponent,
    description: "Comparison of all three render modes. Each section uses `fktTabLazy` content with a counter component so state destruction and preservation are clearly visible when switching tabs.",
    args: {}
}

export default meta;
