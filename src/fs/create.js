import fs from 'fs';

export const create = async () => {
  if (fs.existsSync('./files/fresh.txt')) {
    throw new Error('File already exists');
  } else {
    fs.writeFile('./files/fresh.txt', 'I am fresh and young', (err) => {
      if (err) {
        throw new Error(err.message);
      }
    });
  }
};
