import { copyFile } from 'fs/promises';
import { join } from 'path';

(async () => {
    const filesToCopy = ['index.js', 'package.json', 'README.md', 'CHANGELOG.md', 'LICENSE'];

    const copyPromises = filesToCopy.map(async (fileName) => {
        const sourcePath = join(__dirname, '..', fileName);
        const destinationPath = join(__dirname, '..', 'dist', fileName);
        await copyFile(sourcePath, destinationPath);
    });

    await Promise.all(copyPromises);
})();
