import { promises as fs } from 'fs';

export async function readDir(path) {
    try {
        const files = await fs.readdir(path);
        return files;
    } catch (err) {
        console.error(`❌ \x1b[41m\x1b[1m\x1b[37m ERROR \x1b[0m\x1b[31m Error reading directory: ${err.message} \x1b[0m`);
        return [];
    }
}

