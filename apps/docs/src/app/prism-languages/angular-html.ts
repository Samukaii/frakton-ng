import Prism from 'prismjs';

const prism = Prism as any;

prism.languages['angular2html'] = prism.languages.extend('markup', {});

if (prism.languages['markup']?.['tag']) {
    prism.languages['angular2html']['tag'] = {
        ...prism.languages['markup']['tag'],
    };
}

const pipe = {
    pattern: /(?<=\|\s+)[a-zA-Z_$][\w$]*/,
    alias: 'function',
}

prism.languages.insertBefore('angular2html', 'tag', {
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

if (prism.languages['angular2html']?.['tag']?.['inside']) {
    prism.languages['angular2html']['tag']['inside'] = {
        tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
                punctuation: /^<\/?/,
                namespace: /^[^\s>\/:]+:/,
            },
        },
        'special-attr': [],
        'structural-directive': {
            pattern: /\*[\w-]+(?:="[\s\S]*?")?/,
            inside: {
                'property-name': {
                    pattern: /\*[\w-]+/,
                },
                punctuation: /^\[|](?=\s*=)/,
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
                'attr-equals': {
                    pattern: /=/,
                    alias: 'punctuation',
                },
            },
        },
        'property-binding': {
            pattern: /\[[\s\S]*?]="[\s\S]*?"/,
            inside: {
                'property-name': {
                    pattern: /^\[\(?[^\])]+\)?\]/,
                    inside: {
                        // Pinta especificamente os colchetes e parênteses desta estrutura
                        punctuation: /[\[\]()]/,

                        // O texto que sobrar no meio vira o conteúdo limpo
                        content: {
                            pattern: /(^\[\(?)[^\])]+/,
                            lookbehind: true,
                        },
                    },
                },
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
