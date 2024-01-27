import fs from 'fs/promises';
import { getAbsPath } from '../utils/getAbsPath.js';
import { REMOVE_FILE_NAME } from '../constants/fs.js';

const remove = async () => {
  const removeFilePath = getAbsPath(import.meta.url, `/files/${REMOVE_FILE_NAME}`);
  try {
    await fs.access(removeFilePath);
    await fs.unlink(removeFilePath);
    console.log(`File ${removeFilePath} has been deleted.`);
  } catch (err) {
    console.log(`FS operation failed : ${err}`);
  }
};

console.log('Start deleting file...');
const startTime = Date.now();

await remove();

const endTime = Date.now();

console.log(`File delete operation completed in ${(endTime - startTime) / 1000} seconds.`);
