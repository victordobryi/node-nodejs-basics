import fs from 'fs/promises';
import { getAbsPath } from '../utils/getAbsPath.js';
import { PROP_FILE_NAME, WRONG_FILE_NAME } from '../constants/fs.js';

const rename = async () => {
  try {
    const wrongFilePath = getAbsPath(import.meta.url, `/files/${WRONG_FILE_NAME}`);
    const properFilePath = getAbsPath(import.meta.url, `/files/${PROP_FILE_NAME}`);

    console.log(`Checking if '${WRONG_FILE_NAME}' exists...`);

    try {
      await fs.access(wrongFilePath);
    } catch (error) {
      throw new Error(`FS operation failed: File not found ${wrongFilePath}`);
    }

    console.log(`Checking if '${PROP_FILE_NAME}' already exists...`);

    try {
      await fs.access(properFilePath);
      throw new Error(`FS operation failed: '${properFilePath}' already exists.`);
    } catch (error) {
      console.log(`File ${properFilePath} not found. Start rename process...`);
    }

    console.log(`Renaming '${WRONG_FILE_NAME}' to '${PROP_FILE_NAME}'...`);

    fs.rename(wrongFilePath, properFilePath);

    console.log('File renamed successfully.');
  } catch (err) {
    console.log(`FS operation failed : ${err}`);
  }
};

console.log('Start renaming file...');
const startTime = Date.now();

await rename();

const endTime = Date.now();

console.log(`File rename operation completed in ${(endTime - startTime) / 1000} seconds.`);
