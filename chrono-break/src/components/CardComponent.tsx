import React from 'react';
import { PlayingCard } from '../types';
import { SUITS_COLOR } from '../constants';

interface Props { card: PlayingCard; selected?: boolean }

export default function CardComponent({ card, selected }: Props) {
  const color = SUITS_COLOR[card.suit];
  if (!card.faceUp)
    return (
      <div className="w-20 h-28 bg-slate-700 border border-slate-500 rounded shadow" />
    );
  return (
    <div
      className={`w-20 h-28 bg-white rounded shadow p-1 relative ${
        selected ? 'ring-4 ring-yellow-400' : ''
      }`}
    >
      <span className={`absolute top-1 left-1 text-lg font-bold ${color}`}>
        {card.rank}
      </span>
      <span className={`absolute top-1 right-1 text-xl ${color}`}>
        {card.suit === 'hearts' ? '♥' :
         card.suit === 'diamonds' ? '♦' :
         card.suit === 'clubs' ? '♣' : '♠'}
      </span>
    </div>
  );
}