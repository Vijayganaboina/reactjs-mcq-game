import React from 'react';

// Component to display an individual answer
const Answer = ({ answer, handleAnswerSelect, isSelected }) => {
  return (
    <button
      className={`answer-button ${isSelected ? 'selected' : ''}`}
      onClick={handleAnswerSelect}
    >
      {answer}
    </button>
  );
};

export default Answer;
