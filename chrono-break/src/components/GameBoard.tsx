import React from 'react';
import { RunState, Selection, ClickTarget } from '../types';
import CardComponent from './CardComponent';

interface Props {
  runState: RunState;
  selection: Selection;
  onClick: (t: ClickTarget) => void;
}

export default function GameBoard({ runState, selection, onClick }: Props) {
  return (
    <div className="p-4 grid gap-4">
      <div className="flex gap-4">
        <div
          onClick={() => onClick({ area: 'stock' })}
          className="w-20 h-28 border-2 border-gray-500 rounded flex items-center justify-center cursor-pointer"
        >
          {runState.stock.length || '↻'}
        </div>
        <div
          onClick={() => onClick({ area: 'waste' })}
          className="w-20 h-28 border-2 border-gray-500 rounded"
        >
          {runState.waste.length && (
            <CardComponent card={runState.waste[runState.waste.length - 1]} />
          )}
        </div>

        <div className="flex-1" />

        {Object.entries(runState.foundations).map(([suit, pile]) => (
          <div
            key={suit}
            onClick={() => onClick({ area: 'foundation', suit: suit as any })}
            className="w-20 h-28 border-2 border-yellow-500 rounded"
          >
            {pile.length ? (
              <CardComponent card={pile[pile.length - 1]} />
            ) : (
              <span className="text-xs">{suit}</span>
            )}
          </div>
        ))}

        {runState.temporalCells.map((c, i) => (
          <div
            key={i}
            onClick={() => onClick({ area: 'temporal', index: i })}
            className="w-20 h-28 border-2 border-blue-500 rounded"
          >
            {c && <CardComponent card={c} />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {runState.tableau.map((col, colIndex) => (
          <div
            key={colIndex}
            onClick={() => onClick({ area: 'tableau', col: colIndex })}
            className="min-h-28 border border-gray-600 rounded flex flex-col-reverse"
          >
            {col.map((card, idx) => (
              <div key={card.id} className={idx === col.length - 1 ? '' : '-mt-20'}>
                <CardComponent card={card} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}