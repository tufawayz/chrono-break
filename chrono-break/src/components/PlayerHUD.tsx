import React from 'react';
import { RunState } from '../types';

export default function PlayerHUD({ runState }: { runState: RunState }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/50 p-2 flex justify-between text-sm">
      <span>Score: {runState.score} / {runState.targetScore}</span>
      <span>Draws: {runState.drawsLeft}</span>
      <span>Money: ${runState.money}</span>
    </div>
  );
}