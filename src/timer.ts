import { formatTime } from './utils';

let startTime: number;
let elapsedTime = 0;

export function startTimer() {
  startTime = Date.now();
  elapsedTime = 0;

  return {
    hasHourPassed() {
      const currentTime = Date.now();
      const hourInMilliseconds = 3600000;

      return currentTime - startTime >= hourInMilliseconds;
    },
    getElapsedTime() {
      const currentTime = Date.now();
      elapsedTime = Math.floor((currentTime - startTime) / 1000);
      return formatTime(elapsedTime);
    },
  };
}

export function stopTimer() {
  startTime = Date.now();
}

export function resetTimer() {
  startTime = Date.now();
  elapsedTime = 0;
}

export function getElapsedTime() {
  return formatTime(elapsedTime);
}
