import React from "react";
import { NextQuestionProps } from "../../Types/types";

const NextQuestion = ({
  next,
  gameOver,
  loading,
  number,
  totalQuestions,
}: NextQuestionProps) => {
  return (
    <>
      {!gameOver && !loading && number !== totalQuestions - 1 && (
        <button onClick={next} className="next">
          Next Question
        </button>
      )}
    </>
  );
};

export default NextQuestion;
