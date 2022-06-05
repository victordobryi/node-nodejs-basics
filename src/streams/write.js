import fs from 'fs';
import { stdin } from 'process';

export const write = async () => {
  const output = fs.createWriteStream('./files/fileToWrite.txt');
  stdin.pipe(output);
};
