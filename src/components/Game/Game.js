import React, { useState } from 'react';
import Question from '../Question/Question';
import Navbar from '../Navbar/Navbar';
import generateMathProblem from '../../utils/generateQuestion';
import './Game.css';

const Game = () => {
  const [currentProblem, setCurrentProblem] = useState(generateMathProblem());

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === currentProblem.correctAnswer;
    alert(isCorrect ? 'Correct!' : 'Wrong Answer');
    setCurrentProblem(generateMathProblem());
  };

  return (
    <div className="game-container">
      <Navbar />
      <Question
        problem={currentProblem.problem}
        choices={currentProblem.choices}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Game;