import React, { useState } from 'react';
import Question from '../Question/Question';
import generateMathProblem from '../../utils/generateQuestion';
import './Game.css';

const Game = () => {
  const [currentProblem, setCurrentProblem] = useState(generateMathProblem());

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === currentProblem.correctAnswer;

    if (isCorrect) {
      setCurrentProblem(generateMathProblem());
    } else {
      console.log('Wrong answer clicked!');
    }
  };

  return (
    <div className="game-container">
      <Question
        problem={currentProblem.problem}
        choices={currentProblem.choices}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Game;