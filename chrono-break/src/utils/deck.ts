import { SUITS, RANKS } from '../constants';
import { PlayingCard } from '../types';

export const createDeck = (): PlayingCard[] =>
  SUITS.flatMap(s =>
    RANKS.map(r => ({
      id: `${s[0].toUpperCase()}-${r}`,
      suit: s,
      rank: r,
      faceUp: false,
    }))
  );

export const shuffle = <T>(arr: T[]): T[] => {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
};