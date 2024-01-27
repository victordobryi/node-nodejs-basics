import fs from 'fs/promises';
import path from 'path';
import { getAbsPath } from '../utils/getAbsPath.js';
import { FRESH_CONTENT, FRESH_FILE_NAME } from '../constants/fs.js';

const create = async () => {
  try {
    const folderPath = getAbsPath(import.meta.url, '/files');

    try {
      await fs.access(folderPath);
      console.log(`Folder exists: ${folderPath}`);
    } catch (err) {
      console.log(`Folder not found, creating folder: ${folderPath}`);
      await fs.mkdir(folderPath);
      console.log(`Folder created: ${folderPath}`);
    }

    const filePath = path.join(folderPath, FRESH_FILE_NAME);

    await fs.writeFile(filePath, FRESH_CONTENT);

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
