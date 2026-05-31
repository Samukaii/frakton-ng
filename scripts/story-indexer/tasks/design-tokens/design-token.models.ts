export interface DesignTokenScope {
    name: string;
    selector: string;
}

export interface DesignToken {
    name: string;
    reference: string;
    category: string;
    description: string;
    component?: string;
    type: 'size' | 'color' | 'font' | 'shadow' | 'weight' | 'opacity';
    defaultValue: string;
    scope?: DesignTokenScope;
}

export interface ParsedDesignTokenFile {
    filePath: string;
    scopeName: string | null;
    tokens: Omit<DesignToken, 'scope'>[];
}
