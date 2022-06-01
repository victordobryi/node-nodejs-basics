import fs from 'fs';

export const read = async () => {
  if (fs.existsSync('./files/fileToRead.txt')) {
    fs.readFile('./files/fileToRead.txt', { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        throw new Error(err.message);
      } else {
        console.log(data);
      }
    });
  } else {
    throw new Error('File fileToRead.txt is missing');
  }
};
