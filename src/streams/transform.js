import { stdin, stdout } from 'process';
import { Transform, pipeline } from 'stream';

export const transform = async () => {
  const tranfromText = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join('') + '\n');
    },
  });
  pipeline(stdin, tranfromText, stdout, (err) => console.log(err));
};
