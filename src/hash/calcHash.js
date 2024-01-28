import fs from 'fs/promises';
import crypto from 'crypto';
import { getAbsPath } from '../utils/getAbsPath.js';
import { CALC_HASH_FILE_NAME } from '../constants/fs.js';

const calculateHash = async () => {
  try {
    const cachHashFilePath = getAbsPath(import.meta.url, `/files/${CALC_HASH_FILE_NAME}`);
    const fileData = await fs.readFile(cachHashFilePath, 'utf-8');
    const hash = crypto.createHash('sha256').update(fileData).digest('hex');
    console.log(hash);
  } catch (err) {
    console.log(`Operation failed : ${err}`);
  }
};

await calculateHash();
