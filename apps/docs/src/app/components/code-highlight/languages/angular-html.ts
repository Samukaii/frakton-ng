const prism = Prism as any;

prism.languages['angular-html'] = prism.languages.extend('markup', {});

if (prism.languages['markup']?.['tag']) {
    prism.languages['angular-html']['tag'] = {
        ...prism.languages['markup']['tag'],
    };
}

const pipe = {
    pattern: /(?<=\|\s+)[a-zA-Z_$][\w$]*/,
    alias: 'function',
}

prism.languages.insertBefore('angular-html', 'tag', {
    'let-declaration': {
        pattern: /@let.*;/,
        inside: {
            variable: {
                pattern: /(?<=@let\s+)[a-zA-Z_$][\w$]*/,
                alias: 'function',
            },
            pipe,
            keyword: /@let/,
            punctuation: /[{()};]/,
            operator: /[=|?]/,
        },
    },
    'control-flow': {
        pattern:
            /@(if|else|else\s+if|for|empty|switch|case|default|let)[\w\W]*\) +\{/,
        inside: {
            condition: {
                pattern: /\([\s\S]*\)(?=\s*;?\s*\{)/,
                inside: {
                    punctuation: /^\(|\)$/,
                    expression: {
                        pattern: /[\s\S]+/,
                        inside: prism.languages['javascript'] || {},
                    },
                },
            },
            keyword: /@(else\s+if|if|else|for|empty|switch|case|default|let)/,
            punctuation: /[{()}\[\]]/,
            function: /\b(track)\b/,
        },
    },
    interpolation: {
        pattern: /\{\{[\s\S]*?\}\}/,
        inside: {
            punctuation: /^\{\{|\}\}$/,
            expression: {
                pattern: /[\s\S]+/,
                inside: prism.languages['javascript'] || {},
            },
        },
    },

    punctuation: {
        pattern: /}/,
        alias: 'punctuation',
    },
    pipe,
});

if (prism.languages['angular-html']?.['tag']?.['inside']) {
    prism.languages['angular-html']['tag']['inside'] = {
        tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
                punctuation: /^<\/?/,
                namespace: /^[^\s>\/:]+:/,
            },
        },
        'special-attr': [],
        'property-binding': {
            pattern: /\[[\s\S]*?]="[\s\S]*?"/,
            inside: {
                'property-name': {
                    pattern: /(?<=^\[)[^\]]+/,
                },
                punctuation: /^\[|\](?=\s*=)/,
                'attr-equals': {
                    pattern: /=/,
                    alias: 'punctuation',
                },
                'attr-value': {
                    pattern: /(["'])(?:\\.|(?!\1)[\s\S])*\1/,
                    inside: {
                        string: /^["']|["']$/,
                        expression: {
                            pattern: /[\s\S]+/,
                            inside: prism.languages['javascript'] || {},
                        },
                    },
                },
            },
        },
        'event-binding': {
            pattern: /\([\s\S]*?\)="[\s\S]*?"/,
            inside: {
                'event-name': {
                    pattern: /(?<=^\()[^)]+/,
                },
                punctuation: /^\(|\)(?=\s*=)/,
                'attr-equals': {
                    pattern: /=/,
                    alias: 'punctuation',
                },
                'attr-value': {
                    pattern: /(["'])(?:\\.|(?!\1)[\s\S])*\1/,
                    inside: {
                        string: /^["']|["']$/,
                        expression: {
                            pattern: /[\s\S]+/,
                            inside: prism.languages['javascript'] || {},
                        },
                    },
                },
            },
        },
        'attr-value': {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
                interpolation: {
                    pattern: /\{\{[\s\S]*?\}\}/,
                    inside: {
                        punctuation: /^\{\{|\}\}$/,
                        expression: {
                            pattern: /[\s\S]+/,
                            inside: prism.languages['javascript'] || {},
                        },
                    },
                },
                punctuation: [
                    {
                        pattern: /^=/,
                        alias: 'attr-equals',
                    },
                ],
            },
        },
        punctuation: /\/?>/,
        'attr-name': {
            pattern: /[^\s>\/]+/,
            inside: {
                namespace: /^[^\s>\/:]+:/,
            },
        },
    };
}
