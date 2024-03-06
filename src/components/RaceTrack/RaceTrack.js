// RaceTrack.js
import React from 'react';
import './RaceTrack.css';

const RaceTrack = ({ distance, totalDistance }) => {
  const progress = (distance / totalDistance) * 100;

  return (
    <div className="race-track">
      <div className="race-car" style={{ left: `${progress}%` }}></div>
    </div>
  );
};

export default RaceTrack;