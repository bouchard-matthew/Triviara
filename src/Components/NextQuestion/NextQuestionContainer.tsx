import React from "react";
import { NextQuestion } from ".";
import { useStore } from "../../Context/useAppStore";

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
      {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== totalQuestions - 1 && (
          <button onClick={next} className="next">
            Next Question
          </button>
          // <NextQuestion next={next} />
        )}
    </>
  );
};

export default NextQuestionContainer;
