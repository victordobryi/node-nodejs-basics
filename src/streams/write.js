import fs from 'fs';
import { stdin } from 'process';
import { getAbsPath } from '../utils/getAbsPath.js';
import { WRITE_FILE_NAME } from '../constants/fs.js';

const write = async () => {
  try {
    const writeFilePath = getAbsPath(import.meta.url, `/files/${WRITE_FILE_NAME}`);

    const writeableStream = fs.createWriteStream(writeFilePath);

    stdin.pipe(writeableStream);
  } catch (err) {
    console.log(`Operation failed : ${err}`);
  }
};

await write();
