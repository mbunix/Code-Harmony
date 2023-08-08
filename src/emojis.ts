export function getRandomFrownEmoji() {
  const frownEmojis = ['😞', '😔', '🙁', '😕', '😣'];
  return frownEmojis[Math.floor(Math.random() * frownEmojis.length)];
}

export function getRandomCommendableEmoji() {
  const commendableEmojis = ['👍', '🙌', '👏', '🎉', '🔥'];
  return commendableEmojis[Math.floor(Math.random() * commendableEmojis.length)];
}

export function getRandomSurpriseEmoji() {
  const surpriseEmojis = ['😲', '😮', '😯', '🤯', '😱'];
  return surpriseEmojis[Math.floor(Math.random() * surpriseEmojis.length)];
}

export function getRandomLoveEmoji() {
  const loveEmojis = ['❤️', '💖', '💕', '😍', '😘'];
  return loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
}

