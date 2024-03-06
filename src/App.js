// App.js
import React from 'react';
import Game from './components/Game/Game';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Game />
    </div>
  );
};

export default App;