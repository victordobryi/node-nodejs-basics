import fs from 'fs';
import { stdin } from 'process';
import { getAbsPath } from '../utils/getAbsPath.js';
import { WRITE_FILE_NAME } from '../constants/fs.js';
import { pipeline } from 'stream/promises';

const write = async () => {
  try {
    const writeFilePath = getAbsPath(import.meta.url, `/files/${WRITE_FILE_NAME}`);

    const writeableStream = fs.createWriteStream(writeFilePath, { flags: 'a' });

    await pipeline(stdin, writeableStream);
  } catch (err) {
    console.log(`Operation failed : ${err}`);
  }
};

await write();
