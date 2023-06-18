import * as vscode from 'vscode';
import { startTimer, stopTimer, resetTimer, getElapsedTime } from './timer';
import { getFrownComment, getCommendableComment, getSurpriseComment, getLoveComment } from './comments';
import { getRandomFrownEmoji, getRandomCommendableEmoji ,getRandomSurpriseEmoji, getRandomLoveEmoji } from './emojis';

export function activate(context: vscode.ExtensionContext) {

    let timerStatusBarItem: vscode.StatusBarItem;

    // Command to start the timer
    let startTimerCommand = vscode.commands.registerCommand('devclock.startTimer', () => {
        startTimer();
              vscode.window.showInformationMessage('Timer started!');
        if (!timerStatusBarItem) {
            timerStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
            timerStatusBarItem.text = 'Timer started';
            timerStatusBarItem.show();
        }
    });

    // Command to stop the timer
    let stopTimerCommand = vscode.commands.registerCommand('devclock.stopTimer', () => {
        stopTimer();
        vscode.window.showInformationMessage('Timer stopped!');
    });

    // Command to reset the timer
    let resetTimerCommand = vscode.commands.registerCommand('devclock.resetTimer', async () => {
        await resetTimer();
        vscode.window.showInformationMessage('Timer reset!');
    });

    // Command to show elapsed time
    let showElapsedTimeCommand = vscode.commands.registerCommand('devclock.showElapsedTime', () => {
        const elapsedTime = getElapsedTime();
        vscode.window.showInformationMessage(`Elapsed time: ${elapsedTime}`);
    });

    // Activate the status bar item
    timerStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
    timerStatusBarItem.text = 'Timer: 00:00:00';
    timerStatusBarItem.show();

    // Update the status bar item with the elapsed time
    setInterval(() => {
        const elapsedTime = getElapsedTime();
        timerStatusBarItem.text = `Timer: ${elapsedTime}`;
    }, 1000);

    // Track editor activity
    let isIdle = false;
    let timeout: NodeJS.Timeout | null = null;

    const resetIdleTimer = () => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            isIdle = true;
            const frownEmoji = getRandomFrownEmoji();
            const frownComment = getFrownComment();
            vscode.window.showInformationMessage(frownEmoji);
            vscode.window.showInformationMessage(frownComment);
        }, 5000); // Idle time threshold in milliseconds
    };

    vscode.window.onDidChangeTextEditorSelection(resetIdleTimer);
    vscode.window.onDidChangeVisibleTextEditors(resetIdleTimer);
    vscode.window.onDidChangeActiveTextEditor(resetIdleTimer);
    vscode.window.onDidChangeWindowState((e) => {
        if (e.focused) {
            resetIdleTimer();
        }
    });

    // Initialize the timer
    const timer = startTimer();

    // Subscribe to the 'onDidChangeTextDocument' event
    vscode.workspace.onDidChangeTextDocument(async (event) => {
        // Check if the editor is idle
        if (isIdle) {
            isIdle = false;
            clearTimeout(timeout!);
        }

        // Check if an hour has passed
        if (timer.hasHourPassed()) {
            // Display commendable emoji comment
            const commendableEmoji = getRandomCommendableEmoji();
            const commendableComment = getCommendableComment();
            vscode.window.showInformationMessage(commendableEmoji);
            vscode.window.showInformationMessage(commendableComment);
        }

        // Check if a surprise event occurs
        if (event.contentChanges.length > 10) {
            // Display surprise emoji comment
            const surpriseEmoji = getRandomSurpriseEmoji();
            const surpriseComment = getSurpriseComment(surpriseEmoji);
            vscode.window.showInformationMessage(surpriseComment);
            vscode.window.showInformationMessage(`Surprise! ${surpriseEmoji}`);
        }

        // check if a love event occurs
        if (event.contentChanges.length > 5) {
            // Display love emoji comment
            const loveEmoji = getRandomLoveEmoji();
            const loveComment = getLoveComment(loveEmoji);
            vscode.window.showInformationMessage(loveComment);
            vscode.window.showInformationMessage(`Love! ${loveEmoji}`);
        }
    });

    // Register the 'devclock.helloWorld' command
    let disposable = vscode.commands.registerCommand('devclock.helloWorld', () => {
        vscode.window.showInformationMessage('Hello World from devclock!');
    });

    // Add the disposables to the context subscriptions
    context.subscriptions.push(disposable);
    context.subscriptions.push(startTimerCommand);
    context.subscriptions.push(stopTimerCommand);
    context.subscriptions.push(resetTimerCommand);
    context.subscriptions.push(showElapsedTimeCommand);
}
