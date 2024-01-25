const calculateHash = async () => {
  // Write your code here
};

await calculateHash();

// CODE FROM NODEJS2022Q2

// import fs from 'fs';
// import crypto from 'crypto';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export const calculateHash = async () => {
//   fs.readFile(__dirname + '/files/fileToCalculateHashFor.txt', 'utf-8', (err, data) => {
//     if (err) {
//       throw new Error(err.message);
//     } else {
//       const hash = crypto.createHash('sha256').update(data).digest('hex');
//       console.log(hash);
//     }
//   });
// };

// calculateHash();
