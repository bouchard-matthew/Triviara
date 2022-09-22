import React from "react";
import { StartQuizProps } from "../../Types/types";

const StartQuiz = ({ start }: StartQuizProps) => {
  return (
    <button onClick={start} className="start">
      Start
    </button>
  );
};

export default StartQuiz;
