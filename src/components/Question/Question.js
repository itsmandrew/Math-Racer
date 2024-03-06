import React from 'react';

const Question = ({ problem, choices, onAnswer }) => {
  return (
    <div>
      <h2>{problem}</h2>
      {choices.map((choice, index) => (
        <button key={index} onClick={() => onAnswer(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
};

export default Question;