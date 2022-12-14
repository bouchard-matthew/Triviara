import React from "react";
import { useStore } from "../../Context/useAppStore";
import QuestionCard from "./QuestionCard";

const QuestionCardContainer = () => {
  const {
    gameOver,
    loading,
    number,
    questions,
    totalQuestions,
    score,
    setScore,
    setUserAnswers,
    userAnswers,
  } = useStore();

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // Users answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore(score + 1);
      // Save answer in array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers(answerObject);
    }
  };

  return (
    <>
      <QuestionCard
        number={number}
        totalQuestions={totalQuestions}
        questions={questions}
        userAnswers={userAnswers}
        callback={checkAnswer}
        gameOver={gameOver}
        loading={loading}
      />
    </>
  );
};

export default QuestionCardContainer;
