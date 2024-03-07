// Question.js
import React from 'react';
import './Question.css';

const Question = ({ problem, choices, onAnswer, questionNumber }) => {
  return (
    <div className="question-container">
      <div className="question-box">
        <div className="question-header">
          <div className="question-number">Question {questionNumber}</div>
          <div className="question-separator"></div>
          <div className="question-problem">{problem}</div>
        </div>
      </div>
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