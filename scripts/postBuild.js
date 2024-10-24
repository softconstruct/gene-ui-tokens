import { copyFile, appendFile } from 'fs/promises';
import { join } from 'path';

(async () => {
    const filesToCopy = ['package.json', 'README.md', 'CHANGELOG.md', 'LICENSE'];

    const copyPromises = filesToCopy.map(async (fileName) => {
        const sourcePath = join(__dirname, '..', fileName);
        const destinationPath = join(__dirname, '..', 'dist', fileName);
        await copyFile(sourcePath, destinationPath);
    });

    await Promise.all(copyPromises);

    // Declaration content to be added at the end of index.d.ts
    const declaration = `
declare const jsTokens: any;

export const bootstrap: () => typeof jsTokens;
`;

    const dtsFilePath = join(__dirname, '..', 'dist', 'index.d.ts');

    try {
        // Append the declaration to index.d.ts
        await appendFile(dtsFilePath, declaration);
        console.log('Declaration for bootstrap function added to index.d.ts.');
    } catch (error) {
        console.error('Error adding declaration to index.d.ts:', error);
    }
})();
