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
  const [gameEnded, setGameEnded] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const baseDistance = 500; // Set the base distance in pixels

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    if (!gameEnded && distance < baseDistance) {
      const timer = setTimeout(() => {
        setDistance((prevDistance) => prevDistance + speed);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [gameEnded, distance, speed]);

  useEffect(() => {
    if (distance >= baseDistance) {
      setGameEnded(true);
      setEndTime(Date.now());
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

      setQuestionCount((prevCount) => prevCount + 1);
      setCurrentProblem(generateMathProblem());
    }
  };

  const handleRestartGame = () => {
    setDistance(0);
    setSpeed(baseSpeed);
    setGameEnded(false);
    setStartTime(Date.now());
    setQuestionCount(0);
    setCorrectCount(0);
  };

  const accuracy = questionCount > 0 ? Math.round((correctCount / questionCount) * 100) : 0;
  const timeTaken = (endTime - startTime) / 1000; // Calculate time taken in seconds
  const questionsPerMinute = timeTaken > 0 ? Math.round((questionCount / timeTaken) * 60) : 0;

  return (
    <div className="game-container">
      {!gameEnded && (
        <div className="game-content">
          <RaceTrack distance={distance} totalDistance={baseDistance} />
          <Question
            problem={currentProblem.problem}
            choices={currentProblem.choices}
            onAnswer={handleAnswer}
            questionNumber={questionCount + 1}
          />
        </div>
      )}
      {gameEnded && (
        <div className="game-end">
          <h2>Game Finished!</h2>
          <p>Time: {timeTaken.toFixed(2)} seconds</p>
          <p>Rate: {questionsPerMinute}/min</p>
          <p>Accuracy: {accuracy}%</p>
          <button className="restart-button" onClick={handleRestartGame}>
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;