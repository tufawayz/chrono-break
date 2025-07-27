export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';
export type Rank =
  | 'A' | '2' | '3' | '4' | '5' | '6' | '7' |
  '8' | '9' | '10' | 'J' | 'Q' | 'K';

export interface PlayingCard {
  id: string;
  suit: Suit;
  rank: Rank;
  faceUp: boolean;
}

export interface Relic {
  id: string;
  name: string;
  description: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  icon: string;
}

export interface Anomaly {
  id: string;
  name: string;
  description: string;
  rule: (rs: RunState) => Partial<RunState>;
}

export interface RunState {
  tableau: PlayingCard[][];
  foundations: Record<Suit, PlayingCard[]>;
  stock: PlayingCard[];
  waste: PlayingCard[];
  temporalCells: (PlayingCard | null)[];
  score: number;
  targetScore: number;
  drawsLeft: number;
  money: number;
  relics: Relic[];
  anomaly: Anomaly | null;
}

export type Selection =
  | { type: 'tableau'; col: number; cards: PlayingCard[] }
  | { type: 'waste' }
  | { type: 'temporal'; index: number }
  | { type: 'foundation'; suit: Suit }
  | null;

export type ClickTarget =
  | { area: 'tableau'; col: number }
  | { area: 'foundation'; suit: Suit }
  | { area: 'stock' }
  | { area: 'waste' }
  | { area: 'temporal'; index: number };