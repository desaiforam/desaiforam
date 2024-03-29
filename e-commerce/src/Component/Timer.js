import React from 'react'
import CountdownTimer from './CountdownTimer';

export default function Timer() {

    const THREE_DAYS_IN_MS = 2 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
    </div>
  )
}
