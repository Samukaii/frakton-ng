import * as _angular_core from '@angular/core';
import { TemplateRef } from '@angular/core';
import { FktIconName } from 'frakton-ng/icon';

declare class FktTabComponent {
    label: _angular_core.InputSignal<string>;
    key: _angular_core.InputSignal<string>;
    icon: _angular_core.InputSignal<FktIconName | undefined>;
    private containerTemplate;
    private lazyContent;
    template: _angular_core.Signal<TemplateRef<any>>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktTabComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktTabComponent, "fkt-tab", ["fktTab"], { "label": { "alias": "label"; "required": true; "isSignal": true; }; "key": { "alias": "key"; "required": true; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; }, {}, ["lazyContent"], ["*"], true, never>;
}

declare class FktTabsListComponent {
    tabs: _angular_core.Signal<readonly FktTabComponent[]>;
    activeTab: _angular_core.ModelSignal<string | undefined>;
    protected activeTabComponent: _angular_core.Signal<FktTabComponent | null>;
    protected selectFirstTab: _angular_core.EffectRef;
    protected verifyUnique: _angular_core.EffectRef;
    selectTab(key: string): void;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktTabsListComponent, never>;
    static ɵcmp: _angular_core.ɵɵComponentDeclaration<FktTabsListComponent, "fkt-tabs-list", never, { "activeTab": { "alias": "activeTab"; "required": false; "isSignal": true; }; }, { "activeTab": "activeTabChange"; }, ["tabs"], never, true, never>;
}

declare class FktTabLazyDirective {
    template: TemplateRef<any>;
    static ɵfac: _angular_core.ɵɵFactoryDeclaration<FktTabLazyDirective, never>;
    static ɵdir: _angular_core.ɵɵDirectiveDeclaration<FktTabLazyDirective, "[fktTabLazy]", never, {}, {}, never, never, true, never>;
}

export { FktTabComponent, FktTabLazyDirective, FktTabsListComponent };
