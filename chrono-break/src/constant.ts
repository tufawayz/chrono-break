export const SUITS: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades'];
export const RANKS: Rank[] = [
  'A','2','3','4','5','6','7','8','9','10','J','Q','K'
];
export const NUM_TABLEAU_COLS = 7;
export const NUM_TEMPORAL_CELLS = 2;
export const NUM_FOUNDATIONS = 4;
export const SUITS_COLOR: Record<Suit, string> = {
  hearts:   'text-red-500',
  diamonds: 'text-cyan-400',
  clubs:    'text-gray-400',
  spades:   'text-purple-400',
};