import React from 'react';

// Component to handle navigation between questions
const Navigation = ({ currentQuestion, totalQuestions, handleNavigation, calculateScore }) => {
  return (
    <div className="navigation-container">
      <button
        onClick={() => handleNavigation('prev')}
        disabled={currentQuestion === 0}
      >
        Previous
      </button>
      {currentQuestion < totalQuestions - 1 ? (
        <button onClick={() => handleNavigation('next')}>
          Next
        </button>
      ) : (
        <button onClick={calculateScore}>
          Submit
        </button>
      )}
    </div>
  );
};

export default Navigation;
