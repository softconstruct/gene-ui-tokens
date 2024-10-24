const StyleDictionary = require('style-dictionary');

// Transformer for handling light/dark mode tokens
function lightDarkTransformer(json) {
    Object.keys(json).forEach((key) => {
        const value = json[key];
        if (typeof value === 'object' && value !== null) {
            if ('dark' in value && 'light' in value) {
                json[key] = {
                    value: `light-dark(${value.light.value}, ${value.dark.value})`
                };
            } else {
                lightDarkTransformer(value);
            }
        }
    });
    return json;
}

// Register a custom TypeScript declaration format (.d.ts)
StyleDictionary.registerFormat({
    name: 'typescript/declarations',
    formatter: function ({ dictionary }) {
        const declarations = dictionary.allProperties
            .map((prop) => {
                return `export declare const ${prop.name}: '${prop.value.replace(/'/g, "\\'")}';`;
            })
            .join('\n');

        return `// Auto-generated TypeScript declarations for design tokens\n${declarations}`;
    }
});

module.exports = {
    parsers: [
        {
            pattern: /\.json$/,
            parse: ({ filePath, contents }) => {
                return lightDarkTransformer(JSON.parse(contents));
            }
        }
    ],
    source: ['./tokens/*.json'],
    platforms: {
        css: {
            transformGroup: 'css',
            buildPath: './dist/css/',
            prefix: 'GUIT',
            files: [
                {
                    destination: 'tokens.css',
                    format: 'css/variables',
                    options: { outputReferences: true }
                }
            ]
        },
        js: {
            transformGroup: 'js',
            buildPath: './dist/js/',
            prefix: 'GUIT',
            files: [{ destination: 'tokens.js', format: 'javascript/es6' }]
        },
        ts: {
            transformGroup: 'js',
            buildPath: './dist/',
            prefix: 'GUIT',
            files: [
                {
                    destination: 'index.d.ts', // Generates index.d.ts
                    format: 'typescript/declarations' // Uses the custom .d.ts format
                }
            ]
        }
    }
};
