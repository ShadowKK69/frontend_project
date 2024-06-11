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

  return (
    <div className="quiz-container">
      <h1>Quiz Questions</h1>
      {questions.length > 0 && questionIndex < questions.length && (
        <div>
          <p>{questions[questionIndex].question}</p>
          <ul>
            {questions[questionIndex].answers.map((answer, index) => (
              <li key={index} onClick={clickAnswer}>{answer}</li>
            ))}
          </ul>
        </div>
      )}
      {questions.length > 0 && questionIndex >= questions.length && (
        <p>You've completed the quiz!</p>
      )}
    </div>
  );
};

export default Quiz;
