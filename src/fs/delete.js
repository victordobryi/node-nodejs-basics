import fs from 'fs';

export const remove = async () => {
  if (fs.existsSync('./files/fileToRemove.txt')) {
    fs.unlink('./files/fileToRemove.txt', (err) => {
      if (err) {
        throw new Error(err.message, 'err');
      }
    });
  } else {
    throw new Error('File "fileToRemove.txt" is missing ');
  }
};
