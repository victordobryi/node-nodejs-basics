import fs from 'fs';
import { getAbsPath } from '../utils/getAbsPath.js';
import { READ_FILE_NAME } from '../constants/fs.js';
import { stdout } from 'process';

const read = async () => {
  try {
    const readFilePath = getAbsPath(import.meta.url, `/files/${READ_FILE_NAME}`);

    const fileStream = fs.createReadStream(readFilePath);

    let data = '';

    fileStream.on('data', (chunk) => (data += chunk));

    fileStream.on('end', () => {
      stdout.write(data);
      const endTime = Date.now();
      console.log(`File read operation completed in ${(endTime - startTime) / 1000} seconds.`);
    });

    fileStream.on('error', (err) => console.log(`Error while reading file : ${err}`));
  } catch (err) {
    console.log(`Operation failed : ${err}`);
  }
};

console.log('Start reading file...');
const startTime = Date.now();

await read();
