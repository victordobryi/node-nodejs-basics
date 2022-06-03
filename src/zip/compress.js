import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream';

export const compress = async () => {
  const input = fs.createReadStream('./files/fileToCompress.txt');
  const output = fs.createWriteStream('./files/archive.gz');
  const gzip = zlib.createGzip();
  pipeline(input, gzip, output, (err) => {
    if (err) {
      throw new Error(err.message);
    }
  });
};
