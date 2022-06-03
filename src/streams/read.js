import fs from 'fs';
import { stdout } from 'process';

export const read = async () => {
  const readableStream = fs.createReadStream('./files/fileToRead.txt', 'utf-8');
  let data = '';
  readableStream.on('data', (chunk) => (data += chunk));
  readableStream.on('end', () => stdout.write(data));
  readableStream.on('error', (error) => console.log('Error', error.message));
};
