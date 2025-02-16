import { ARCHIVE_FILE_NAME, COMPRESS_FILE_NAME } from '../constants/filenames.js';
import { getAbsPath } from '../utils/getAbsPath.js';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'fs';

const compress = async () => {
  try {
    const sourceFilePath = getAbsPath(import.meta.url, `/files/${COMPRESS_FILE_NAME}`);
    const destinationFilePath = getAbsPath(import.meta.url, `/files/${ARCHIVE_FILE_NAME}`);
    const source = createReadStream(sourceFilePath);
    const destination = createWriteStream(destinationFilePath);
    const gzip = createGzip();
    await pipeline(source, gzip, destination);
  } catch (err) {
    console.log(`Operation failed : ${err}`);
  }
};

await compress();
