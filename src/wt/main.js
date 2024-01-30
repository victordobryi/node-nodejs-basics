import { Worker } from 'worker_threads';
import os from 'os';
import { getAbsPath } from '../utils/getAbsPath.js';

const performCalculations = async () => {
  const workerFilePath = getAbsPath(import.meta.url, `/worker.js`);

  try {
    await Promise.all(
      os.cpus().map(
        (item, i) =>
          new Promise((res, rej) => {
            const worker = new Worker(workerFilePath, {
              workerData: 10 + i,
            });
            worker.on('message', (result) => res({ status: 'resolved', data: result }));
            worker.on('error', () => res({ status: 'error', data: null }));
          })
      )
    ).then((res) => console.log(res));
  } catch (err) {
    console.log(`Operation failed : ${err}`);
  }
};

await performCalculations();
