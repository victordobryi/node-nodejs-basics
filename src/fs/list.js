import fs from 'fs';

export const list = async () => {
  fs.readdir('./files', (err, files) => {
    if (err) {
      throw new Error(err.message);
    } else {
      console.log(files);
    }
  });
};
