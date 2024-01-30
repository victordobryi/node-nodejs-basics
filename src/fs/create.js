import fs from 'fs/promises';
import path from 'path';
import { getAbsPath } from '../utils/getAbsPath.js';
import { FRESH_CONTENT, FRESH_FILE_NAME } from '../constants/filenames.js';

const create = async () => {
  try {
    const folderPath = getAbsPath(import.meta.url, '/files');
    const filePath = path.join(folderPath, FRESH_FILE_NAME);
    await fs.writeFile(filePath, FRESH_CONTENT, { flag: 'wx+' });

    console.log(`File created: ${filePath}`);
  } catch (err) {
    console.log(`FS operation failed : ${err}`);
  }
};

console.log('Start creating file...');
const startTime = Date.now();

await create();

const endTime = Date.now();

console.log(`File creation completed in ${(endTime - startTime) / 1000} seconds.`);
