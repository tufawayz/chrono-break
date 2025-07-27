import { PlayingCard, Suit } from '../types';

export const isRed = (s: Suit) => s === 'hearts' || s === 'diamonds';

export const canPlaceOnTableau = (
  card: PlayingCard,
  target?: PlayingCard
): boolean => {
  if (!target) return true;
  const down = rankValue(card.rank) === rankValue(target.rank) - 1;
  const alt = isRed(card.suit) !== isRed(target.suit);
  return down && alt;
};

export const canPlaceOnFoundation = (
  card: PlayingCard,
  pile: PlayingCard[]
): boolean => {
  if (pile.length === 0) return card.rank === 'A';
  const top = pile[pile.length - 1];
  return (
    top.suit === card.suit &&
    rankValue(card.rank) === rankValue(top.rank) + 1
  );
};

const rankValue = (r: string): number =>
  r === 'A' ? 1 : r === 'J' ? 11 : r === 'Q' ? 12 : r === 'K' ? 13 : +r;