// HomePage.js
import React, { useState } from 'react';
import './HomePage.css';
import Game from '../Game/Game';

const HomePage = () => {
  const [selectedMode, setSelectedMode] = useState(null);

  const handlePracticeMode = () => {
    setSelectedMode('practice');
  };

  const handleMultiplayerMode = () => {
    setSelectedMode('multiplayer');
  };

  return (
    <div className="home-container">
      {selectedMode === null ? (
        <>
          <button className="enter-race-button" onClick={handleMultiplayerMode}>
            Enter a Typing Race
          </button>
          <div className="mode-buttons">
            <div className="mode-button" onClick={handlePracticeMode}>
              <h3>Typing Test</h3>
              <p>Improve your typing skills on your own</p>
              <button>Practice Yourself</button>
            </div>
            <div className="mode-button" onClick={handleMultiplayerMode}>
              <h3>Race your friends</h3>
              <p>Create your own racetrack and play with friends</p>
              <button>Create Racetrack</button>
            </div>
          </div>
        </>
      ) : selectedMode === 'practice' ? (
        <div className="game-wrapper">
            <Game />
        </div>
      ) : (
        <div>
          <h2>Multiplayer Game</h2>
          {/* Add the multiplayer game components */}
        </div>
      )}
    </div>
  );
};

export default HomePage;