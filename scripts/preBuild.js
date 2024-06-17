import { rm } from 'fs/promises';
import { resolve } from 'path';

(async () => {
    await rm(resolve(__dirname, '../dist'), { recursive: true, force: true });
})();
