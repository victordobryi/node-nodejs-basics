import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
  try {
    const tranfromText = new Transform({
      transform(chunk, encoding, callback) {
        callback(null, chunk.toString().split('').reverse().join('') + '\n');
      },
    });
    stdin.pipe(tranfromText).pipe(stdout);
  } catch (err) {
    console.log(`Operation failed : ${err}`);
  }
};

await transform();
