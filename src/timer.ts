import { formatTime } from './utils';
import * as vscode from 'vscode';

let startTime: Date | null = null;
let elapsedTime = 0;
let isActive = false;

export function startTimer() {
  startTime = new Date();
  elapsedTime = 0;
  isActive = true;

  return {
    hasHourPassed() {
      if (!startTime) {
        return false;
      }

      const currentTime = new Date();
      const hourInMilliseconds = 3600000;

      return currentTime.getTime() - startTime.getTime() >= hourInMilliseconds;
    },
    getElapsedTime() {
      const currentTime = new Date();
      elapsedTime = Math.floor((currentTime.getTime() - startTime!.getTime()) / 1000);
      return formatTime(elapsedTime);
    },
  };
}

export function stopTimer() {
  startTime = null;
  isActive = false;
}

export async function resetTimer() {
  startTime = new Date();
  elapsedTime = 0;
  isActive = true;
}

export function getElapsedTime() {
  return formatTime(elapsedTime);
}

// Event listener for opening a text document in the VSCode editor
vscode.workspace.onDidOpenTextDocument((event: vscode.TextDocument) => {
  // Initialize the start time when a document is opened
  if (!isActive) {
    resetTimer();
  }
});

// Event listener for closing a text document in the VSCode editor
vscode.workspace.onDidCloseTextDocument((event: vscode.TextDocument) => {
  // Stop the timer when a document is closed
  if (isActive) {
    stopTimer();
  }
});
