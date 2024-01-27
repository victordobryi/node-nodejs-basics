import fs from 'fs/promises';
import { getAbsPath } from '../utils/getAbsPath.js';
import { READ_FILE_NAME } from '../constants/fs.js';

const read = async () => {
  try {
    const readFilePath = getAbsPath(import.meta.url, `/files/${READ_FILE_NAME}`);
    await fs.access(readFilePath);
    const fileContent = await fs.readFile(readFilePath, 'utf-8');
    console.log('File content:', fileContent);
  } catch (err) {
    console.log(`FS operation failed : ${err}`);
  }
};

console.log('Start reading file...');
const startTime = Date.now();

await read();

const endTime = Date.now();

console.log(`File read operation completed in ${(endTime - startTime) / 1000} seconds.`);
