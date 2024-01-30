import { Worker } from 'worker_threads';
import os from 'os';
import { getAbsPath } from '../utils/getAbsPath.js';

const performCalculations = async () => {
  const workerFilePath = getAbsPath(import.meta.url, `/worker.js`);

  try {
    const corsCount = os.cpus().length;
    const resultsArr = [];
    for (let i = 0; i < corsCount; i++) {
      const currentNum = 10 + i;
      const worker = new Worker(workerFilePath, {
        workerData: currentNum,
      });
      resultsArr.push(
        new Promise((res, rej) => {
          worker.on('message', (result) => {
            res({
              status: 'resolved',
              data: result,
            });
          });
          worker.on('error', (error) => {
            res({
              status: 'error',
              data: null,
            });
          });
        })
      );
    }
    await Promise.all(resultsArr).then((res) => console.log(res));
  } catch (err) {
    console.log(`Operation failed : ${err}`);
  }
};

await performCalculations();
