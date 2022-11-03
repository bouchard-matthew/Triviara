import React from "react";
import { useStore } from "../../Context/useAppStore";
import NextQuestion from "./NextQuestion";

const NextQuestionContainer = () => {
  const {
    gameOver,
    loading,
    number,
    setGameOver,
    setNumber,
    totalQuestions,
    userAnswers,
  } = useStore();

  const next = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === totalQuestions) {
      setGameOver(true);
      return;
    }
    setNumber(nextQuestion);
  };

  return (
    <>
      <NextQuestion
        next={next}
        gameOver={gameOver}
        loading={loading}
        number={number}
        totalQuestions={totalQuestions}
        disabled={userAnswers.length - 1 < number}
      />
    </>
  );
};

export default NextQuestionContainer;
