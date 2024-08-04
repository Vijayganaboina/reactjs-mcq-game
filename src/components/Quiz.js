import React, { useState } from 'react';
import questions from '../data/questions.json';
import Question from './Question';
import Navigation from './Navigation';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);
  
  // Function to handle answer selection
  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer
    });
  };
  
  // Function to handle navigation between questions
  const handleNavigation = (direction) => {
    if (direction === 'next') {
      setCurrentQuestion((prev) => prev + 1);
    } else if (direction === 'prev') {
      setCurrentQuestion((prev) => prev - 1);
    }
  };
  
  // Function to calculate the final score
  const calculateScore = () => {
    const totalScore = questions.reduce((acc, question) => {
      if (selectedAnswers[question.id] === question.correct) {
        return acc + 1;
      }
      return acc;
    }, 0);
    setScore(totalScore);
  };

  return (
    <div className="quiz-container">
        <h1>Reactjs Quiz Questions</h1>
      {score === null ? (
        <>
          <Question
            question={questions[currentQuestion]}
            handleAnswerSelect={handleAnswerSelect}
            selectedAnswer={selectedAnswers[questions[currentQuestion].id]}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
          />
          <Navigation
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            handleNavigation={handleNavigation}
            calculateScore={calculateScore}
          />
        </>
      ) : (
        <div className="score-container">
          <h2>Your Score: {score} / {questions.length}</h2>
        </div>
      )}
    </div>
  );
};

export default Quiz;
