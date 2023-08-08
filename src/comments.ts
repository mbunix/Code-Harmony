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
const frownEmojis: string[] = ['😞', '😔', '🙁', '😕', '😣'];
const commendableEmojis: string[] = ['👍', '👏', '👌', '👊', '💪'];
let lastCommendableEmojiIndex = -1;
let lastSurpriseEmojiIndex = -1;
let lastLoveEmojiIndex = -1;
let lastFrownEmojiIndex = -1;


export function getCommendableComment(): string {
  const currentIndex = getRandomIndex(commendableComments.length, lastCommendableEmojiIndex);
  lastCommendableEmojiIndex = currentIndex;
  return `${getRandomCommendableEmoji()} ${commendableComments[currentIndex]}`;
}


export function getSurpriseComment(emoji: string): string {
  const currentIndex = getRandomIndex(surpriseEmojis.length, lastSurpriseEmojiIndex);
  lastSurpriseEmojiIndex = currentIndex;
  return `${getRandomSurpriseEmoji()} ${surpriseEmojis[currentIndex]}`;
}

export function getLoveComment(emoji: string): string {
  const currentIndex = getRandomIndex(loveEmojis.length, lastLoveEmojiIndex);
  lastLoveEmojiIndex = currentIndex;
  return `${getRandomLoveEmoji()} ${loveEmojis[currentIndex]}`;
}
export function getFrownComment(emoji: string): string {
  const currentIndex = getRandomIndex(frownEmojis.length, lastFrownEmojiIndex);
  lastFrownEmojiIndex = currentIndex;
  return `${emoji} ${frownEmojis[currentIndex]}`;
}


export function getRandomIndex(maxIndex: number, lastIndex: number): number {
  let currentIndex = Math.floor(Math.random() * maxIndex);
  while (currentIndex === lastIndex) {
    currentIndex = Math.floor(Math.random() * maxIndex);
  }
  return currentIndex;
}

export function getRandomEmoji(emojiList: string[]): string {
  const currentIndex = Math.floor(Math.random() * emojiList.length);
  return emojiList[currentIndex];
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
export function getRandomFrownEmoji() {
  return getRandomEmoji(frownEmojis);
}
