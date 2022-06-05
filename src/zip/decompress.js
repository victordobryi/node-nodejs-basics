import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';

export const decompress = async () => {
  const input = fs.createReadStream('./files/archive.gz');
  const output = fs.createWriteStream('./files/fileToCompress.txt');
  const gzip = zlib.createUnzip();
  pipeline(input, gzip, output, (err) => {
    if (err) {
      throw new Error(err.message);
    }
  });
};
