import React from "react";
import { StoreState } from "../../Context/useAppStore";

interface NextQuestionProps
  extends Pick<
    StoreState,
    "loading" | "gameOver" | "number" | "totalQuestions"
  > {
  next: () => void;
  disabled: boolean;
}

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
