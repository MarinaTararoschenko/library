import StyleDictionary from 'style-dictionary';
import { transformTypes } from 'style-dictionary/enums';

const { value: transformTypeValue, name } = transformTypes;

// Basic Transformers
StyleDictionary.registerTransform({
    name: 'size/px',
    type: transformTypeValue,
    filter: (token) => token.$type === 'strokeWidth' || token.$type === 'fontSizes' || token.$type === 'letterSpacing' || token.$type === 'borderRadius' || token.$type === 'blur',
    transform: (token) => {
        if (token.$value.includes('px') || token.$value.includes('%') || token.$value.includes('rem')) {
            return token.$value;
        }
        return token.$value + 'px';
    }
});

StyleDictionary.registerTransform({
    name: 'name/path',
    type: 'name',
    transform: (token) => {
        let name = token.path
            .join('-')
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .toLowerCase();
        return name;
    }
});

// Custom format for typographic tokens
StyleDictionary.registerFormat({
    name: 'css/typography-variables',
    format: function ({ dictionary }) {
        const tokens = dictionary.allTokens.filter(token => token.$type === 'typography');

        return `:root {\n${tokens.map(token => {
            // Use original.$value to access original links
            const { fontFamily, fontSize, lineHeight } = token.original.$value;

            const refToVar = (ref) => {
                if (typeof ref === 'string' && ref.startsWith('{') && ref.endsWith('}')) {
                    const refPath = ref.slice(1, -1).split('.');
                    return `var(--${refPath.join('-').replace(/\s+/g, '-').toLowerCase()})`;
                }
                return ref;
            };

            return `  --${token.name}: ${refToVar(fontSize)}/${refToVar(lineHeight)} ${refToVar(fontFamily)};`;
        }).join('\n')}\n}`;
    }
});

StyleDictionary.registerTransformGroup({
    name: 'custom/scss',
    transforms: [
        'name/path',
        'size/px',
    ]
});

const config = {
    source: ['tokens/**/*.json'],
    platforms: {
        scss: {
            transformGroup: 'custom/scss',
            buildPath: 'src/assets/sass/library/tokens/',
            files: [
                {
                    destination: 'foundations/_colors.scss',
                    format: 'css/variables',
                    filter: (token) => token.filePath.includes('Base.json') && token.$type === 'color'
                },
                {
                    destination: 'foundations/_typography-base.scss',
                    format: 'css/variables',
                    filter: (token) => {
                        return  token.filePath.includes('Base.json') &&
                                token.$type === 'fontFamily' ||
                                token.$type === 'fontWeight' ||
                                token.$type === 'fontSizes' ||
                                token.$type === 'letterSpacing' ||
                                token.$type === 'lineHeights'
                    }
                },
                {
                    destination: 'foundations/_borders.scss',
                    format: 'css/variables',
                    filter: (token) => {
                        return  token.filePath.includes('Base.json') &&
                                token.$type === 'borderRadius' ||
                                token.$type === 'strokeWidth'
                    }
                },
                {
                    destination: 'foundations/_blur.scss',
                    format: 'css/variables',
                    filter: (token) => token.filePath.includes('Base.json') && token.$type === 'blur'
                },
                {
                    destination: 'themes/_colors.scss',
                    format: 'css/variables',
                    filter: (token) => token.filePath.includes('Ecosistema TUU.json') && token.$type === 'color'
                },
                {
                    destination: 'themes/_borders.scss',
                    format: 'css/variables',
                    filter: (token) => {
                        return  token.filePath.includes('Ecosistema TUU.json') &&
                                token.$type === 'borderRadius' ||
                                token.$type === 'strokeWidth'
                    }
                },
                {
                    destination: 'themes/_typography.scss',
                    format: 'css/variables',
                    filter: (token) => token.filePath.includes('Ecosistema TUU.json') && token.$type === 'typography'
                },
                {
                    destination: 'foundations/_typography-desktop.scss',
                    format: 'css/typography-variables',
                    filter: (token) => token.filePath.includes('Desktop.json') && token.$type === 'typography'
                },
                {
                    destination: 'foundations/_typography-mobile.scss',
                    format: 'css/typography-variables',
                    filter: (token) => token.filePath.includes('Mobile.json') && token.$type === 'typography'
                },
            ]
        },
    }
};

const sd = new StyleDictionary(config);
await sd.buildAllPlatforms();
