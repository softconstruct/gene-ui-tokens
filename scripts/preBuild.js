import { rm, mkdir, writeFile } from 'fs/promises';
import { resolve } from 'path';

(async () => {
    const distPath = resolve(__dirname, '../dist');
    const indexTsContent = `
import * as jsTokens from './js/tokens';

export const bootstrap = () => {
    import('./css/tokens.css');
    return jsTokens;
};
    `;

    try {
        // Remove the dist directory if it exists
        await rm(distPath, { recursive: true, force: true });

        // Create the dist directory
        await mkdir(distPath, { recursive: true });

        // Create the index.ts file with the specified content
        await writeFile(resolve(distPath, 'index.js'), indexTsContent.trim());

        console.log('Dist directory recreated and index.js file created.');
    } catch (error) {
        console.error('Error during prebuild process:', error);
    }
})();
