// Question.js
import React from 'react';

const Question = ({ problem, choices, onAnswer }) => {
  return (
    <div className="question-container">
      <h2>{problem}</h2>
      <div className="choices-container">
        {choices.map((choice, index) => (
          <button key={index} onClick={() => onAnswer(choice)}>
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;