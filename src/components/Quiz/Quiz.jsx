import React, { useEffect, useState } from "react";
import './Quiz.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isClickable, setIsClickable] = useState(true);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionsAmount, setQuestionsAmount] = useState(10);
  const [categories, setCategories] = useState('general_knowledge');
  const [difficulty, setDifficulty] = useState('easy');
  const [shownQuestions, setShownQuestions] = useState([]);
  const [results, setResults] = useState(false);
  
  useEffect(() => {
    if (quizStarted) {
      const fetchQuestions = async () => {
        const response = await fetch(`https://the-trivia-api.com/api/questions?limit=${questionsAmount}&categories=${categories}&difficulty=${difficulty}`);
        const data = await response.json();
        setQuestions(data.map(question => ({
          ...question,
          answers: [question.correctAnswer, ...question.incorrectAnswers].sort(() => Math.random() - 0.5)
        })));
      };
      fetchQuestions();
    }
  }, [quizStarted]);
  
  const startQuiz = (e) => {
    if (window.confirm("Are you sure?")) {
      e.preventDefault();
      setQuizStarted(true);
      setQuestionIndex(0);
      setScore(0);
      setShownQuestions([]);
      setResults(false);
    }
  };
  
  const resetQuiz = () => {
    setQuizStarted(false);
    setQuestionIndex(0);
    setScore(0);
    setShownQuestions([]);
    setResults(false);
  };
  
  const clickAnswer = (answer) => {
    setSelectedAnswer(answer);
    setIsClickable(false);

    if (answer === questions[questionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }

    setShownQuestions(prevShownQuestions => [
      ...prevShownQuestions,
      {
        ...questions[questionIndex],
        selectedAnswer: answer,
      }
    ])

    setTimeout(() => {
      setQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setIsClickable(true);
    }, 700);

  };

  const displayResults = () => {
    setResults(prevResults => !prevResults);
  }

  const nameCategory = (category) => {
    return category.replace("_", " ").toUpperCase().replace("_", " ");
  };

  return (
    <div className="quiz-container">
      {!quizStarted && (
        <div className="quiz-options-container">
          <div className="quiz-options-title">Quiz Options Menu</div>
          <form className="quiz-options" onSubmit={startQuiz}>
            <label>
              Questions:
              <select name="questions" value={questionsAmount} onChange={e => setQuestionsAmount(e.target.value)}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={30}>30</option>
              </select>
            </label>

            <label>
              Category:
              <select name="categories" value={categories} onChange={e => setCategories(e.target.value)}>
                <option value="music">Music</option>
                <option value="sport_and_leisure">Sport & Leisure</option>
                <option value="film_and_tv">Movies & TV Series</option>
                <option value="arts_and_literature">Art & Literature</option>
                <option value="history">History</option>
                <option value="society_and_culture">Society & Culture</option>
                <option value="science">Science</option>
                <option value="geography">Geography</option>
                <option value="food_and_drink">Food & Drink</option>
                <option value="general_knowledge">General Knowledge</option>
              </select>
            </label>

            <label>
              Difficulty:
              <select name="difficulty" value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>

            <button type="submit">Start</button>
          </form>
        </div>
      )}
      {quizStarted && questions.length > 0 && questionIndex < questions.length && (
        <div className="quiz-questions-wrapper">
          <button className="quiz-questions-reset" onClick={resetQuiz}>Go back to Options</button>
          <div className="quiz-difficulty">{nameCategory(difficulty)} MODE</div>
          <div className="quiz-category-name">{nameCategory(categories)}</div>
          <div className="quiz-question-number">Question {questionIndex + 1} / {questions.length}</div>
          <p className="quiz-questions">{questions[questionIndex].question}</p>
          <ul className="quiz-answers-list">
            {questions[questionIndex].answers.map((answer, index) => {
              const isCorrect = answer === questions[questionIndex].correctAnswer;
              const isSelected = selectedAnswer === answer;
              let backgroundColor;

              if (selectedAnswer) {
                if (isSelected) {
                  backgroundColor = isCorrect ? '#33ffaf' : '#ff4343'; 
                } else if (isCorrect) {
                  backgroundColor = '#33ffaf';
                }
              }

              return (
                <>
                  <li
                    key={index}
                    style={{ backgroundColor }}
                    className="quiz-answers"
                    onClick={isClickable ? () => clickAnswer(answer) : null}
                  >
                    {answer}
                  </li>
                </>

              );
            })}
          </ul>
        </div>
      )}
      {quizStarted && questions.length > 0 && questionIndex >= questions.length && (
        <div className="quiz-score-wrapper">
          {score === questions.length && (
            <div>
              <div className="quiz-score-100">Well Done</div>
              <div>You got all the questions right</div>
            </div>
          )}
          <div className="quiz-score-questions">You've scored {score} out of {questions.length} questions</div>
          <button onClick={displayResults}>{results ? 'Hide results' : 'Show results'}</button>
          {results && shownQuestions.map((question, index) => {

            let color;
            let borderColor;

            if (question.selectedAnswer == question.correctAnswer) {
              color = '#33aaaf';
              borderColor = '#33aaaf';
            } else {
              color = '#ff4343';
              borderColor = '#ff4343';
            }      

            return (
                <div key={index} style={{borderColor}} className="review-question">
                  <dl className="question-list">
                    <dt className="question">Question:</dt>
                    <dd className="answer">{question.question}</dd>
                    <dt className="question">Your Answer:</dt>
                    <dd className="answer" style={{color}}>{question.selectedAnswer}</dd>
                    <dt className="question">Correct Answer:</dt>
                    <dd className="answer">{question.correctAnswer}</dd>
                  </dl>
                </div>
            );
          })}

          <button onClick={resetQuiz} className="quiz-reset">Reset Game</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
