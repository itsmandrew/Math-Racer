// App.js
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;