// Game.js
import React, { useState, useEffect } from 'react';
import Question from '../Question/Question';
import RaceTrack from '../RaceTrack/RaceTrack';
import generateMathProblem from '../../utils/generateQuestion';
import './Game.css';

const Game = () => {
  const [currentProblem, setCurrentProblem] = useState(generateMathProblem());
  const [distance, setDistance] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [baseSpeed] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const baseDistance = 500; // Set the base distance in pixels

  useEffect(() => {
    if (gameStarted && !gameEnded && distance < baseDistance) {
      const timer = setTimeout(() => {
        setDistance((prevDistance) => prevDistance + speed);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [gameStarted, gameEnded, distance, speed]);

  useEffect(() => {
    if (distance >= baseDistance) {
      setGameEnded(true);
    }
  }, [distance]);

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === currentProblem.correctAnswer;

    if (isCorrect) {
      setCorrectCount((prevCount) => prevCount + 1);
      setSpeed((prevSpeed) => prevSpeed + 2);
      setTimeout(() => {
        setSpeed(baseSpeed);
      }, 500);
    }

    setQuestionCount((prevCount) => prevCount + 1);
    setCurrentProblem(generateMathProblem());
  };

  const handleStartGame = () => {
    setDistance(0);
    setSpeed(baseSpeed);
    setGameStarted(true);
    setGameEnded(false);
    setQuestionCount(0);
    setCorrectCount(0);
  };

  const accuracy = questionCount > 0 ? Math.round((correctCount / questionCount) * 100) : 0;

  return (
    <div className="game-container">
      {!gameStarted && !gameEnded && (
        <button className="start-button" onClick={handleStartGame}>
          Start Game
        </button>
      )}
      {gameStarted && !gameEnded && (
        <div className="game-content">
          <RaceTrack distance={distance} totalDistance={baseDistance} />
          <Question
            problem={currentProblem.problem}
            choices={currentProblem.choices}
            onAnswer={handleAnswer}
          />
          <div className="stats">
            <p>Accuracy: {accuracy}%</p>
          </div>
        </div>
      )}
      {gameEnded && (
        <div className="game-end">
          <h2>Game Finished!</h2>
          <p>Accuracy: {accuracy}%</p>
          <button className="restart-button" onClick={handleStartGame}>
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;