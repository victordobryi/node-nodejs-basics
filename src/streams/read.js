import fs from 'fs';
import { getAbsPath } from '../utils/getAbsPath.js';
import { READ_FILE_NAME } from '../constants/filenames.js';
import { stdout } from 'process';
import { pipeline } from 'stream/promises';

const read = async () => {
  try {
    const readFilePath = getAbsPath(import.meta.url, `/files/${READ_FILE_NAME}`);

    const fileStream = fs.createReadStream(readFilePath);

    fileStream.on('end', () => {
      const endTime = Date.now();
      console.log(`File read operation completed in ${(endTime - startTime) / 1000} seconds.`);
    });

    await pipeline(fileStream, stdout);
  } catch (err) {
    console.log(`Operation failed : ${err}`);
  }
};

console.log('Start reading file...');
const startTime = Date.now();

await read();
