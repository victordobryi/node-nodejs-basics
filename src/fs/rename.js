import fs from 'fs';

export const rename = async () => {
  if (fs.existsSync('./files/wrongFilename.txt')) {
    if (fs.existsSync('./files/properFilename.md')) {
      throw new Error('File "properFilename.md" already exists');
    } else {
      fs.rename('./files/wrongFilename.txt', './files/properFilename.md', (err) => {
        if (err) {
          throw new Error(err.message, 'err');
        }
      });
    }
  } else {
    throw new Error('File "wrongFilename.txt" is missing ');
  }
};
