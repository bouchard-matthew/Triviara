import React from "react";
import { NextQuestionProps } from "../../Types/types";

const NextQuestion = ({
  next,
  gameOver,
  loading,
  number,
  totalQuestions,
  disabled,
}: NextQuestionProps) => {
  return (
    <>
      {!gameOver && !loading && number !== totalQuestions - 1 && (
        <button onClick={next} disabled={disabled} className="next">
          Next Question
        </button>
      )}
    </>
  );
};

export default NextQuestion;
