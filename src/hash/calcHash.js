import fs from 'fs';
import crypto from 'crypto';
import { getAbsPath } from '../utils/getAbsPath.js';
import { CALC_HASH_FILE_NAME } from '../constants/fs.js';

const calculateHash = async () => {
  try {
    const cachHashFilePath = getAbsPath(import.meta.url, `/files/${CALC_HASH_FILE_NAME}`);
    const hash = crypto.createHash('sha256');
    const fileStream = fs.createReadStream(cachHashFilePath);

    fileStream.on('data', (chunk) => {
      hash.update(chunk);
    });

    fileStream.on('end', () => {
      const hashValue = hash.digest('hex');
      console.log(`Hash value : ${hashValue}`);

      const endTime = Date.now();
      console.log(`File calculate operation completed in ${(endTime - startTime) / 1000} seconds.`);
    });

    fileStream.on('error', (err) => {
      console.log(`Error while reading file : ${err}`);
    });
  } catch (err) {
    console.log(`Operation failed : ${err}`);
  }
};

console.log('Start calculating hash value...');
const startTime = Date.now();

await calculateHash();
