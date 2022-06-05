import { Worker } from 'worker_threads';
import os from 'os';

export const performCalculations = async () => {
  const corsCount = os.cpus().length;
  const resultsArr = [];

  for (let i = 0; i < corsCount; i++) {
    const currentNum = 10 + i;
    const worker = new Worker('./worker.js', {
      workerData: currentNum,
    });
    resultsArr.push(
      new Promise((res, rej) => {
        worker.on('message', (result) => {
          res(`${currentNum}th Fibonacci No: ${result}`);
        });
      })
    );
  }
  await Promise.all(resultsArr).then((res) => console.log(res));
};

performCalculations();
