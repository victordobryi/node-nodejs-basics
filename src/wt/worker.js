// n should be received from main thread
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
};

sendResult();

// CODE FROM NODEJS2022Q2

// import { workerData, parentPort } from 'worker_threads';

// export const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

// export const sendResult = () => {
//   parentPort.postMessage(nthFibonacci(workerData));
// };

// sendResult();
