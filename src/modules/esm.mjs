import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import fs from 'fs/promises';
import './files/c.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = fs.readFile(`${__dirname}/files/a.json`, 'utf-8');
} else {
  unknownObject = fs.readFile(`${__dirname}/files/b.json`, 'utf-8');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

unknownObject.then((data) => {
  console.log(data);
});

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
