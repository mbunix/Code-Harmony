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

export function getFrownComment(): string {
  const randomIndex = Math.floor(Math.random() * frownComments.length);
  return frownComments[randomIndex];
}

export function getCommendableComment(): string {
  const randomIndex = Math.floor(Math.random() * commendableComments.length);
  return commendableComments[randomIndex];
}
export function getSurpriseComment(emoji: string): string {
  return `Wow, that was unexpected! ${emoji}`;
}

export function getLoveComment(emoji: string): string {
  return `You're doing amazing! Spread the love. ${emoji}`;
}
