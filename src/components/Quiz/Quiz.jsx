import React, { useEffect, useState } from "react";
import './Quiz.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://the-trivia-api.com/api/questions?limit=10');
        const data = await response.json();
        setQuestions(data.map(question => ({
          ...question,
          answers: [question.correctAnswer, ...question.incorrectAnswers]
        })));
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchQuestions();
  }, []);

  const clickAnswer = () => {
    setQuestionIndex(prevIndex => prevIndex + 1);
  };
  
  const borderColors = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r},${g},${b})`;
  }

  return (
    <div className="quiz-container full-width">
      {questions.length > 0 && questionIndex < questions.length && (
        <div>
          <p className="quiz-questions">{questions[questionIndex].question}</p>
          <ul className="quiz-answers-list">
            {questions[questionIndex].answers.map((answer, index) => (   
              <li 
                className="quiz-answers" 
                key={index} 
                onClick={clickAnswer}
                style={{borderColor: borderColors()}}
              > 
                {answer}
              </li>
            ))}
          </ul>
        </div>
      )}
      {questions.length > 0 && questionIndex >= questions.length && (
        <p>You've completed the quiz with X points!</p>
      )}
    </div>
  );
};

export default Quiz;
