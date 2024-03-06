import React, { useState } from 'react';
import Question from '../Question/Question';
import generateMathProblem from '../../utils/generateQuestion';

const Game = () => {
  const [currentProblem, setCurrentProblem] = useState(generateMathProblem());

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === currentProblem.correctAnswer;
    alert(isCorrect ? 'Correct!' : 'Wrong Answer');
    setCurrentProblem(generateMathProblem());
  };

  return (
    <div>
      <h1>Math Question Game</h1>
      <Question
        problem={currentProblem.problem}
        choices={currentProblem.choices}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Game;