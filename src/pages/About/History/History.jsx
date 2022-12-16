import React from 'react';
import { useMediaQuery } from '@mui/material';
import { Timeline } from '../Timeline';
import { ResponsiveTimeline } from '../ResponsiveTimeline';

export function History() {
  const matches = useMediaQuery('(min-width: 768px)');
  return (
    <section className="history" id='history'>
      <div className="bd-container">
        <h2 className="history__title">Notre histoire</h2>
        {matches ? <Timeline /> : <ResponsiveTimeline />}
      </div>
    </section>
  );
}