import React from 'react';
import { Relic } from '../types';

export default function RelicComponent({ relic }: { relic: Relic }) {
  return (
    <div className="tooltip" title={relic.description}>
      <span className="text-2xl">{relic.icon}</span>
    </div>
  );
}