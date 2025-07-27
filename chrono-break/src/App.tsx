import React, { useState } from 'react';
import { RunState, Selection, ClickTarget } from './types';
import { createDeck, shuffle } from './utils/deck';
import GameBoard from './components/GameBoard';
import PlayerHUD from './components/PlayerHUD';
import { NUM_TABLEAU_COLS, NUM_TEMPORAL_CELLS } from './constants';

const newRun = (): RunState => {
  const deck = shuffle(createDeck());
  const tableau = Array.from({ length: NUM_TABLEAU_COLS }, (_, i) => {
    const col = deck.splice(0, i + 1);
    col.forEach((c, idx) => (c.faceUp = idx === i));
    return col;
  });
  return {
    tableau,
    foundations: { hearts: [], diamonds: [], clubs: [], spades: [] },
    stock: deck,
    waste: [],
    temporalCells: Array(NUM_TEMPORAL_CELLS).fill(null),
    score: 0,
    targetScore: 100,
    drawsLeft: 30,
    money: 0,
    relics: [],
    anomaly: null,
  };
};

export default function App() {
  const [rs, setRs] = useState<RunState>(newRun());
  const [sel, setSel] = useState<Selection>(null);

  const top = (arr: PlayingCard[]) => arr[arr.length - 1];

  const handleClick = (target: ClickTarget) => {
    if (target.area === 'stock') {
      if (rs.stock.length) {
        const card = rs.stock.pop()!;
        card.faceUp = true;
        setRs({ ...rs, waste: [...rs.waste, card] });
      } else if (rs.waste.length) {
        rs.waste.forEach(c => (c.faceUp = false));
        setRs({ ...rs, stock: [...rs.waste].reverse(), waste: [] });
      }
      return;
    }

    if (!sel) {
      // seleziona...
      // (abbreviato per brevità)
      return;
    }

    // logica di movimento (semplificata)
    setSel(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white flex flex-col">
      <GameBoard runState={rs} selection={sel} onClick={handleClick} />
      <PlayerHUD runState={rs} />
    </div>
  );
}