import React from 'react';
import Answer from './Answer';

// Component to display a question and its answers
const Question = ({ question, handleAnswerSelect, selectedAnswer, currentQuestion, totalQuestions }) => {
  return (
    <div className="question-container">
      <h3>{`Question ${currentQuestion + 1} / ${totalQuestions}`}</h3>
      <p>{question.question}</p>
      <div className="answers-container">
        {question.answers.map((answer, index) => (
          <Answer
            key={index}
            answer={answer}
            handleAnswerSelect={() => handleAnswerSelect(question.id, answer)}
            isSelected={selectedAnswer === answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
