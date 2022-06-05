import fs from 'fs';
import crypto from 'crypto';

export const calculateHash = async () => {
  fs.readFile('./files/fileToCalculateHashFor.txt', 'utf-8', (err, data) => {
    if (err) {
      throw new Error(err.message);
    } else {
      const hash = crypto.createHash('sha256').update(data).digest('hex');
      console.log(hash);
    }
  });
};
