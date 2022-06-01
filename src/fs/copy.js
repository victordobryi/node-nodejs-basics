import fs from 'fs';

export const copy = async () => {
  if (fs.existsSync('./files_copy/')) {
    throw new Error('File already exists');
  } else {
    fs.mkdir('./files_copy', (err) => {
      if (err) {
        throw new Error(err.message);
      }
    });
  }
  fs.readdir('./files', (err, files) => {
    if (err) {
      throw new Error(err.message);
    } else {
      files.map((file) => {
        fs.copyFile(`./files/${file}`, `./files_copy/${file}`, (err) => {
          if (err) {
            throw new Error(err.message);
          }
        });
      });
    }
  });
};
