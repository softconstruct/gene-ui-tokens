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
        }
    }
};
