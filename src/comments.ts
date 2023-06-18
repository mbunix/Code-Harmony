const frownComments: string[] = [
  "Oops, you're wasting time, pal. 😔",
  "Hmm, maybe it's time for a break? 😔",
  "Don't get discouraged, but you could be more productive. 😔",
  "Remember, every minute counts! 😔",
  "Let's stay focused and make progress. 😔",
];

const commendableComments: string[] = [
  "Great job! Keep up the good work. 👍",
  "You're on fire! Keep coding like a champ. 🔥",
  "Impressive progress! Keep it up. 👏",
  "You're making this look easy! Keep going. 💪",
  "Amazing effort! Stay motivated and keep coding. 💯",
];

const surpriseEmojis: string[] = ['😲', '😮', '😯', '🤯', '😱'];
const loveEmojis: string[] = ['❤️', '💖', '💕', '😍', '😘'];

let lastFrownIndex = -1;
let lastCommendableEmojiIndex = -1;

export function getFrownComment(): string {
  const currentIndex = getRandomIndex(frownComments.length, lastFrownIndex);
  lastFrownIndex = currentIndex;
  return frownComments[currentIndex];
}

export function getCommendableComment(): string {
  const currentIndex = getRandomIndex(commendableComments.length, lastCommendableEmojiIndex);
  lastCommendableEmojiIndex = currentIndex;
  return commendableComments[currentIndex];
}

export function getSurpriseComment(emoji: string): string {
  return `Wow, that was unexpected! ${emoji}`;
}

export function getLoveComment(emoji: string): string {
  return `You're doing amazing! Spread the love. ${emoji}`;
}

function getRandomIndex(maxIndex: number, lastIndex: number): number {
  let currentIndex = Math.floor(Math.random() * maxIndex);
  while (currentIndex === lastIndex) {
    currentIndex = Math.floor(Math.random() * maxIndex);
  }
  return currentIndex;
}

function getRandomEmoji(emojiList: string[]): string {
  const currentIndex = Math.floor(Math.random() * emojiList.length);
  return emojiList[currentIndex];
}

export function getRandomFrownEmoji() {
  return getRandomEmoji(frownEmojis);
}

export function getRandomCommendableEmoji() {
  return getRandomEmoji(commendableEmojis);
}

export function getRandomSurpriseEmoji() {
  return getRandomEmoji(surpriseEmojis);
}

export function getRandomLoveEmoji() {
  return getRandomEmoji(loveEmojis);
}
