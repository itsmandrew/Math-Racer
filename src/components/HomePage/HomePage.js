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
        <div className="home-content">
          <div className="enter-race-button-container">
            <h3>MathRacer - Global Competition</h3>
            <p>Get better at math while racing against others!</p>
            <button className="enter-race-button" onClick={handleMultiplayerMode}>
              Enter a Math Race
            </button>
          </div>
          <div className="mode-buttons-container">
            <div className="mode-button" onClick={handlePracticeMode}>
              <h3>Math Test</h3>
              <p>Improve your typing skills on your own</p>
              <button>Practice Yourself</button>
            </div>
            <div className="mode-button" onClick={handleMultiplayerMode}>
              <h3>Race your friends</h3>
              <p>Create your own racetrack and play with friends</p>
              <button>Create Racetrack</button>
            </div>
          </div>
        </div>
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