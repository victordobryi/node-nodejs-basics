import fs from 'fs/promises';
import { getAbsPath } from '../utils/getAbsPath.js';
import path from 'path';

const list = async () => {
  const fileNames = [];
  const listRecursive = async (currentPath = '/files') => {
    try {
      const filesPath = getAbsPath(import.meta.url, currentPath);

      const items = await fs.readdir(filesPath);

      console.log(`Listed items in ${filesPath}: ${items.join(', ')}`);

      for (const item of items) {
        const itemPath = path.join(filesPath, item);

        const isDirectory = (await fs.stat(itemPath)).isDirectory();

        if (isDirectory) {
          const currPath = `${currentPath}/${item}`;

          console.log(`Entering directory: ${currPath}`);

          await listRecursive(currPath);
        } else {
          fileNames.push(item);
          console.log(`File found: ${item}`);
        }
      }
    } catch (err) {
      console.log(`FS operation failed : ${err}`);
    }
  };

  await listRecursive();
  console.log('\x1b[35m%s\x1b[0m', `File names: ${fileNames.join(', ')}`);
};

console.log('Start listing file...');
const startTime = Date.now();

await list();

const endTime = Date.now();

console.log(`File list operation completed in ${(endTime - startTime) / 1000} seconds.`);
