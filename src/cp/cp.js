import { fork } from 'child_process';
import { getAbsPath } from '../utils/getAbsPath.js';

const spawnChildProcess = async (args) => {
  const cpFilePath = getAbsPath(import.meta.url, `/files/script.js`);

  fork(cpFilePath, args);
};

spawnChildProcess(['1', '2', '3']);
