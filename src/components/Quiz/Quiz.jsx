import React, { useEffect, useState } from "react";
import './Quiz.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const [questionsAmount, setQuestionsAmount] = useState(10);
  const [categories, setCategories] = useState('general_knowledge');
  const [difficulty, setDifficulty] = useState('hard');
  
  useEffect(() => {
    if(quizStarted) {
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

  const clickAnswer = (answer) => {
    if (answer === questions[questionIndex].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
    setQuestionIndex(prevIndex => prevIndex + 1);
  };

  const startQuiz = (e) => {
    if(window.confirm("Are you sure?")) {

      e.preventDefault();
      console.log('started');
      setQuizStarted(true);
      setQuestionIndex(0);
      setScore(0);
    }
  }

  const nameCategory = (category) => {
    return category.replace("_"," ").toUpperCase().replace("_"," ");
  }

  return (
    <div className="quiz-container full-width">
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
          <div className="quiz-difficulty">{nameCategory(difficulty)} MODE</div>
          <div className="quiz-category-name">{nameCategory(categories)}</div>
          <div className="quiz-question-number">Question {questionIndex + 1} / {questions.length}</div>
          <p className="quiz-questions">{questions[questionIndex].question}</p>
          <ul className="quiz-answers-list">
            {questions[questionIndex].answers.map((answer, index) => (
              <li 
                className="quiz-answers" 
                key={index} 
                onClick={() => clickAnswer(answer)}
              >
                {answer}
              </li>
            ))}
          </ul>
        </div>
      )}
      {quizStarted && questionIndex >= questions.length && (
        <>
          <div>You've scored {score} out of {questions.length}!</div>
        </>
      )}
    </div>
  );
};

export default Quiz;
