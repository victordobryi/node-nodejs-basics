import fs from 'fs/promises';
import { getAbsPath } from '../utils/getAbsPath.js';

const copy = async () => {
  try {
    console.log('Starting file copy process...');

    const filesPath = getAbsPath(import.meta.url, '/files');
    const filesCopyPath = getAbsPath(import.meta.url, '/files_copy');

    console.log(`Source directory: ${filesPath}`);
    console.log(`Destination directory: ${filesCopyPath}`);

    await fs.access(filesPath);

    try {
      await fs.access(filesCopyPath);
      throw new Error(`FS operation failed: '${filesCopyPath}' already exists.`);
    } catch (error) {
      console.log(`Destination directory does not exist. Creating...`);
      await fs.mkdir(filesCopyPath);
      console.log(`Destination directory created: ${filesCopyPath}`);
    }

    const files = await fs.readdir(filesPath);

    for (const file of files) {
      try {
        console.log(`Copying file: ${sourceFile} to ${destinationFile}`);
        await fs.copyFile(`${filesPath}/${file}`, `${filesCopyPath}/${file}`);
        console.log(`File copied successfully: ${file}`);
      } catch (err) {
        throw new Error(`Copyfile error: ${err.message}`);
      }
    }

    console.log('File copy process completed.');
    console.log('List of copied files:', files);
  } catch (err) {
    console.log(`FS operation failed : ${err}`);
  }
};

console.log('Start creating file...');
const startTime = Date.now();

await copy();

const endTime = Date.now();

console.log(`File creation completed in ${(endTime - startTime) / 1000} seconds.`);
