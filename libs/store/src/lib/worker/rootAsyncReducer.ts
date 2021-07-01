import { wrap } from 'comlink';

let singletonWorker = null;
let singletonBlocker = false;

async function getAsyncReducer() {
  if (!singletonWorker && !singletonBlocker) {
    singletonBlocker = true;
    singletonWorker = await wrap(
      new Worker('../reducers/workerReducer.ts', { type: 'module' })
    );
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(singletonWorker);
    }, 0);
  });
}

export default getAsyncReducer;
