import { stdin, stdout } from 'process';
import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  try {
    const tranfromStream = new Transform({
      transform(chunk, encoding, callback) {
        callback(null, chunk.toString().split('').reverse().join('') + '\n');
      },
    });
    await pipeline(stdin, tranfromStream, stdout);
  } catch (err) {
    console.log(`Operation failed : ${err}`);
  }
};

await transform();
